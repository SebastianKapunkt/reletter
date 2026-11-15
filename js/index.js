const state = loadDrawingState();
const letterCanvas = document.getElementById('letter-canvas');
const context = letterCanvas.getContext('2d');
const canvasStage = document.getElementById('canvas-stage');
const wordInput = document.getElementById('word-input');
const wordStrip = document.getElementById('word-strip');
const historyStrip = document.getElementById('history-strip');
const activeSlot = document.getElementById('active-slot');
const nextButton = document.getElementById('next-letter');
let canvasSize = 1;
let pointer = null;
let currentStroke = null;
let deferredInstall = null;

function drawInk(target, drawing, size) {
  target.save();
  target.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--draw-color').trim();
  target.fillStyle = target.strokeStyle;
  target.lineWidth = size / 16;
  target.lineCap = 'round';
  target.lineJoin = 'round';
  for (const stroke of drawing.strokes) {
    target.beginPath();
    target.moveTo(stroke[0][0] * size, stroke[0][1] * size);
    if (stroke.length === 1) {
      target.arc(stroke[0][0] * size, stroke[0][1] * size, size / 32, 0, Math.PI * 2);
      target.fill();
    } else {
      for (const [x, y] of stroke.slice(1)) target.lineTo(x * size, y * size);
      target.stroke();
    }
  }
  target.restore();
}

function inkPreview(drawing) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 192;
  canvas.setAttribute('aria-hidden', 'true');
  drawInk(canvas.getContext('2d'), drawing, 192);
  return canvas;
}

function drawingTile(drawing, label, select, active = false) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'drawing-tile';
  button.setAttribute('aria-label', label);
  if (active) button.setAttribute('aria-current', 'true');
  if (drawing.strokes.length) button.append(inkPreview(drawing));
  else button.textContent = drawing.character;
  button.addEventListener('click', select);
  return button;
}

function drawBoard() {
  context.clearRect(0, 0, canvasSize, canvasSize);
  const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  renderLetterTemplate(context, state.active.character, canvasSize, color);
  drawInk(context, state.active, canvasSize);
}

function resizeBoard() {
  if (state.view !== 'draw' || (state.mode === 'word' && state.word.complete)) return;
  canvasSize = Math.max(1, Math.floor(Math.min(canvasStage.clientWidth, canvasStage.clientHeight, 640)));
  const pixels = Math.max(1, Math.round(canvasSize * (window.devicePixelRatio || 1)));
  letterCanvas.style.width = letterCanvas.style.height = `${canvasSize}px`;
  if (letterCanvas.width !== pixels || letterCanvas.height !== pixels) {
    letterCanvas.width = letterCanvas.height = pixels;
  }
  context.setTransform(pixels / canvasSize, 0, 0, pixels / canvasSize, 0, 0);
  drawBoard();
}

/**
 * Copy active work into its owner before saving or changing canvases.
 * A word position owns its drawing independently of latest-per-character state.
 * Free handwriting enters history on leaving; word positions form one group on Finish.
 */
function checkpoint(archive = false) {
  if (state.mode === 'word') state.word.drawings[state.word.position] = copyDrawing(state.active);
  else state.free = copyDrawing(state.active);
  if (state.dirty) state.latest[state.active.character] = copyDrawing(state.active);
  if (archive && state.dirty) {
    if (state.mode === 'free' && state.active.strokes.length) state.history.unshift(copyDrawing(state.active));
    state.history = state.history.slice(0, 50);
    state.dirty = false;
  }
  saveDrawingState(state);
}

function finishStroke(event) {
  if (pointer === null || (event && event.pointerId !== pointer)) return;
  const released = pointer;
  pointer = null;
  currentStroke = null;
  if (letterCanvas.hasPointerCapture(released)) letterCanvas.releasePointerCapture(released);
  checkpoint();
  renderDock();
}

function show(view) {
  finishStroke();
  state.view = view;
  checkpoint();
  render();
  if (view === 'entry') wordInput.focus();
  else document.querySelector(`#${view}-screen button:not([hidden]):not(:disabled)`)?.focus({preventScroll: true});
}

function selectFreeDrawing(drawing) {
  finishStroke();
  checkpoint(true);
  state.mode = 'free';
  state.active = copyDrawing(drawing);
  state.free = copyDrawing(drawing);
  state.view = 'draw';
  saveDrawingState(state);
  render();
  document.getElementById('open-grid').focus({preventScroll: true});
}

function selectWordPosition(position) {
  if (state.mode === 'word' && state.word.position === position && !state.word.complete) {
    show('draw');
    return;
  }
  finishStroke();
  checkpoint(true);
  state.mode = 'word';
  state.word.complete = false;
  state.word.position = position;
  state.active = copyDrawing(state.word.drawings[position]);
  state.view = 'draw';
  saveDrawingState(state);
  render();
  nextButton.focus({preventScroll: true});
}

function selectHistoryWord(entry) {
  const restored = copyWord(entry.word);
  finishStroke();
  checkpoint(true);
  if (state.word && !state.word.complete) rememberWord(state);
  state.word = restored;
  state.mode = 'word';
  state.active = copyDrawing(restored.drawings[restored.position]);
  show('draw');
}

function wordHistoryTile(entry, selected) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'history-word';
  button.setAttribute('aria-label', `${entry.word.complete ? 'Restore finished word' : 'Resume word'} ${entry.word.text}`);
  button.setAttribute('aria-pressed', String(selected));
  for (const drawing of entry.word.drawings) {
    const tile = document.createElement('span');
    tile.className = drawing === null ? 'word-space' : 'drawing-tile';
    tile.setAttribute('aria-hidden', 'true');
    if (drawing !== null) tile.append(inkPreview(drawing));
    button.append(tile);
  }
  button.addEventListener('click', () => selectHistoryWord(entry));
  return button;
}

function renderWordStrip(word) {
  wordStrip.replaceChildren();
  word.drawings.forEach((drawing, position) => {
    if (drawing === null) {
      const gap = document.createElement('span');
      gap.className = 'word-space';
      gap.setAttribute('aria-hidden', 'true');
      wordStrip.append(gap);
    } else {
      const label = `${drawing.character}, position ${position + 1}`;
      const active = !word.complete && position === word.position;
      wordStrip.append(drawingTile(drawing, label, () => selectWordPosition(position), active));
    }
  });
  const final = word.position === word.text.trimEnd().length - 1;
  nextButton.setAttribute('aria-label', final ? 'Finish word' : 'Next letter');
  document.getElementById('next-icon').setAttribute('href', final ? '#icon-done' : '#icon-next');
}

function renderHistory(history, selectedWord) {
  const selectedKey = selectedWord ? wordInkKey(selectedWord) : null;
  historyStrip.replaceChildren(...history.map((entry, index) => {
    if (entry.word) {
      const selected = entry.word.complete && wordInkKey(entry.word) === selectedKey;
      return wordHistoryTile(entry, selected);
    }
    const label = `${entry.character}, history ${index + 1}, newest first`;
    return drawingTile(entry, label, () => selectFreeDrawing(entry));
  }));
}

function renderDock() {
  const wordMode = state.mode === 'word';
  const finished = wordMode && state.word.complete;
  wordStrip.hidden = !wordMode;
  activeSlot.hidden = wordMode;
  nextButton.hidden = !wordMode || finished;
  document.getElementById('clear-canvas').hidden = finished;
  activeSlot.replaceChildren();
  if (wordMode) {
    renderWordStrip(state.word);
  } else {
    wordStrip.replaceChildren();
    activeSlot.append(drawingTile(state.active, `${state.active.character}, active drawing`, () => {}, true));
  }
  renderHistory(state.history, finished ? state.word : null);
}

function renderShowcase() {
  const art = document.getElementById('showcase-art');
  art.setAttribute('aria-label', `Your handwritten ${state.word.text}`);
  art.replaceChildren();
  let group = null;
  for (const drawing of state.word.drawings) {
    if (drawing === null) {
      const gap = document.createElement('span');
      gap.className = 'showcase-space';
      art.append(gap);
      group = null;
    } else {
      if (!group) {
        group = document.createElement('div');
        group.className = 'showcase-word';
        art.append(group);
      }
      group.append(inkPreview(drawing));
    }
  }
}

function render() {
  for (const view of ['grid', 'entry', 'draw']) {
    document.getElementById(`${view}-screen`).hidden = state.view !== view;
  }
  document.getElementById('resume-word').hidden = !state.word || state.word.complete;
  if (state.view === 'entry') {
    wordInput.value = state.draft;
    document.getElementById('start-word').disabled = !state.draft.trim();
  }
  if (state.view === 'draw') {
    const finished = state.mode === 'word' && state.word.complete;
    letterCanvas.hidden = finished;
    document.getElementById('showcase-art').hidden = !finished;
    letterCanvas.setAttribute('aria-label', `Draw ${state.active.character}`);
    if (finished) renderShowcase();
    renderDock();
    resizeBoard();
    wordStrip.querySelector('[aria-current]')?.scrollIntoView({block: 'nearest', inline: 'nearest'});
  }
}

function canvasPoint(event) {
  const bounds = letterCanvas.getBoundingClientRect();
  return [
    Math.round(Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)) * 10000) / 10000,
    Math.round(Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)) * 10000) / 10000
  ];
}

function startStroke(event) {
  if (!event.isPrimary || event.button !== 0 || pointer !== null || (state.mode === 'word' && state.word.complete)) return;
  event.preventDefault();
  letterCanvas.setPointerCapture(event.pointerId);
  pointer = event.pointerId;
  currentStroke = [canvasPoint(event)];
  state.active.strokes.push(currentStroke);
  state.dirty = true;
  drawBoard();
}

function continueStroke(event) {
  if (event.pointerId !== pointer) return;
  const samples = event.getCoalescedEvents?.();
  for (const sample of samples?.length ? samples : [event]) {
    const point = canvasPoint(sample);
    const previous = currentStroke[currentStroke.length - 1];
    if (Math.hypot(point[0] - previous[0], point[1] - previous[1]) >= 0.002) currentStroke.push(point);
  }
  drawBoard();
}

function buildLetterGrid() {
  const grid = document.getElementById('letter-grid');
  for (const character of [...supportedCharacters].filter(character => /^[A-Z]$/.test(character))) {
    const pair = document.createElement('div');
    pair.className = 'letter-pair';
    for (const name of [character, character.toLowerCase()]) {
      if (!supportedCharacters.has(name)) continue;
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = name;
      button.setAttribute('aria-label', `${name === character ? 'Uppercase' : 'Lowercase'} ${name}`);
      button.addEventListener('click', () => selectFreeDrawing(state.latest[name] || emptyDrawing(name)));
      pair.append(button);
    }
    grid.append(pair);
  }
}

function clearActiveCanvas() {
  if (state.mode === 'word' && state.word.complete) return;
  finishStroke();
  state.active.strokes = [];
  state.dirty = true;
  checkpoint();
  drawBoard();
  renderDock();
}

function updateWordInput() {
  const before = wordInput.value;
  const caret = filterWord(before.slice(0, wordInput.selectionStart)).length;
  state.draft = filterWord(before);
  if (before !== state.draft) {
    wordInput.value = state.draft;
    wordInput.setSelectionRange(caret, caret);
  }
  document.getElementById('start-word').disabled = !state.draft.trim();
  saveDrawingState(state);
}

function startWord(event) {
  event.preventDefault();
  updateWordInput();
  if (!state.draft.trim()) return;
  finishStroke();
  checkpoint(true);
  const text = state.draft;
  const position = [...text].findIndex(character => supportedCharacters.has(character));
  state.word = {
    text,
    position,
    complete: false,
    drawings: [...text].map(character => character === ' ' ? null : emptyDrawing(character))
  };
  state.mode = 'word';
  state.active = copyDrawing(state.word.drawings[position]);
  state.draft = '';
  show('draw');
}

function advanceWord() {
  const next = [...state.word.text].findIndex((character, position) => position > state.word.position && supportedCharacters.has(character));
  if (next !== -1) {
    selectWordPosition(next);
    return;
  }
  finishStroke();
  checkpoint(true);
  state.word.complete = true;
  rememberWord(state);
  show('draw');
}

function saveBeforeLeaving(event) {
  if (event.type === 'visibilitychange' && document.visibilityState !== 'hidden') return;
  finishStroke();
  checkpoint();
}

async function installApp() {
  if (!deferredInstall) return;
  try {
    await deferredInstall.prompt();
    await deferredInstall.userChoice;
  } finally {
    deferredInstall = null;
    document.getElementById('install-app').hidden = true;
  }
}

function bindDrawingEvents() {
  letterCanvas.addEventListener('pointerdown', startStroke);
  letterCanvas.addEventListener('pointermove', continueStroke);
  letterCanvas.addEventListener('pointerup', finishStroke);
  letterCanvas.addEventListener('pointercancel', finishStroke);
  letterCanvas.addEventListener('lostpointercapture', finishStroke);
}

function bindUIEvents() {
  document.getElementById('open-grid').addEventListener('click', () => show('grid'));
  document.getElementById('entry-back').addEventListener('click', () => show('grid'));
  document.getElementById('grid-back').addEventListener('click', () => show('draw'));
  document.getElementById('new-word').addEventListener('click', () => show('entry'));
  document.getElementById('resume-word').addEventListener('click', () => selectWordPosition(state.word.position));
  document.getElementById('clear-canvas').addEventListener('click', clearActiveCanvas);
  document.getElementById('entry-screen').addEventListener('submit', startWord);
  nextButton.addEventListener('click', advanceWord);
  wordInput.addEventListener('input', event => {
    if (!event.isComposing) updateWordInput();
  });
  wordInput.addEventListener('compositionend', updateWordInput);
}

function bindBrowserEvents() {
  new ResizeObserver(resizeBoard).observe(canvasStage);
  window.addEventListener('resize', resizeBoard);
  window.addEventListener('pagehide', saveBeforeLeaving);
  document.addEventListener('visibilitychange', saveBeforeLeaving);
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredInstall = event;
    document.getElementById('install-app').hidden = false;
  });
  document.getElementById('install-app').addEventListener('click', installApp);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }
}

function main() {
  buildLetterGrid();
  bindDrawingEvents();
  bindUIEvents();
  bindBrowserEvents();
  render();
}

main();
