/*
 * Persist handwriting as normalized strokes, separate from tracing guides.
 * Active work, word positions, and latest-per-character drawings are protected;
 * only history snapshots may be discarded to make a replacement save fit.
 */
const drawingStorageKey = 'reletter.drawings.v1';
const supportedCharacters = new Set(letters.map(letter => letter.name));

function emptyDrawing(character) {
  return {character, strokes: []};
}

function copyDrawing(drawing) {
  return {
    character: drawing.character,
    strokes: drawing.strokes.map(stroke => stroke.map(point => [...point]))
  };
}

function copyWord(word) {
  return {...word, drawings: word.drawings.map(drawing => drawing === null ? null : copyDrawing(drawing))};
}

/** Identifies saved words by text and strokes; browsing and completion do not create new ink. */
function wordInkKey(word) {
  return JSON.stringify([word.text, word.drawings]);
}

function deduplicateWordHistory(history) {
  const words = new Map();
  return history.filter(entry => {
    if (!entry.word) return true;
    const key = wordInkKey(entry.word);
    const existing = words.get(key);
    if (existing) {
      if (entry.word.complete) existing.word = copyWord(entry.word);
      return false;
    }
    words.set(key, entry);
    return true;
  });
}

/**
 * Keep a word as one history group, without duplicating unchanged work.
 * The representative letter preserves compatibility with older letter-only readers.
 */
function rememberWord(state) {
  if (!state.word.drawings.some(drawing => drawing?.strokes.length)) return;
  const word = copyWord(state.word);
  const key = wordInkKey(word);
  const existing = state.history.find(entry => entry.word && wordInkKey(entry.word) === key);
  if (existing) {
    if (word.complete) existing.word = word;
    state.history = deduplicateWordHistory(state.history);
    return;
  }
  state.history.unshift({...copyDrawing(word.drawings[word.position]), word});
  state.history = state.history.slice(0, 50);
}

function filterWord(text) {
  return [...text].filter(character => character === ' ' || supportedCharacters.has(character)).join('');
}

function newDrawingState() {
  return {
    version: 1,
    view: 'grid',
    mode: 'free',
    active: emptyDrawing('A'),
    free: emptyDrawing('A'),
    latest: {},
    word: null,
    history: [],
    dirty: false,
    draft: ''
  };
}

function validDrawing(drawing) {
  return drawing && supportedCharacters.has(drawing.character) &&
    Array.isArray(drawing.strokes) && drawing.strokes.every(stroke =>
      Array.isArray(stroke) && stroke.length > 0 && stroke.every(point =>
        Array.isArray(point) && point.length === 2 &&
        point.every(value => Number.isFinite(value) && value >= 0 && value <= 1)));
}

function validWord(word) {
  return word && typeof word.text === 'string' && filterWord(word.text) === word.text && Boolean(word.text.trim()) &&
    typeof word.complete === 'boolean' && Array.isArray(word.drawings) && word.drawings.length === word.text.length &&
    Number.isInteger(word.position) && supportedCharacters.has(word.text[word.position]) &&
    word.drawings.every((drawing, i) => word.text[i] === ' ' ? drawing === null :
      validDrawing(drawing) && drawing.character === word.text[i]);
}

function validDrawingState(state) {
  if (!state || state.version !== 1) return false;
  if (!['grid', 'entry', 'draw', 'showcase'].includes(state.view) || !['free', 'word'].includes(state.mode)) return false;
  if (!validDrawing(state.active) || !validDrawing(state.free)) return false;
  if (typeof state.dirty !== 'boolean' || typeof state.draft !== 'string' || filterWord(state.draft) !== state.draft) return false;

  const latest = state.latest;
  if (!latest || typeof latest !== 'object' || Array.isArray(latest)) return false;
  if (!Object.entries(latest).every(([character, drawing]) => validDrawing(drawing) && drawing.character === character)) return false;

  const history = state.history;
  if (!Array.isArray(history) || history.length > 50) return false;
  if (!history.every(entry => validDrawing(entry) && (entry.word === undefined || validWord(entry.word)))) return false;

  if (state.word !== null && !validWord(state.word)) return false;
  if (state.mode === 'word' && (!state.word || state.active.character !== state.word.text[state.word.position])) return false;
  return state.view !== 'showcase' || (state.mode === 'word' && state.word?.complete);
}

function loadDrawingState() {
  try {
    const stored = JSON.parse(localStorage.getItem(drawingStorageKey));
    if (validDrawingState(stored)) {
      stored.history = deduplicateWordHistory(stored.history);
      // Older saves used a separate showcase view; keep their ink in the shared drawing area.
      if (stored.view === 'showcase') {
        stored.view = 'draw';
        rememberWord(stored);
      }
      return stored;
    }
  } catch {
    // Storage may be blocked or malformed; drawing remains available in memory.
  }
  return newDrawingState();
}

/**
 * Replace the complete saved session with one atomic localStorage write.
 * On quota failure, trim only pending history; never delete the previous save first.
 */
function saveDrawingState(state) {
  const pending = {...state, history: state.history.slice()};
  while (true) {
    try {
      localStorage.setItem(drawingStorageKey, JSON.stringify(pending));
      state.history = pending.history;
      return true;
    } catch (error) {
      if (error.name !== 'QuotaExceededError' || pending.history.length === 0) return false;
      pending.history.pop();
    }
  }
}
