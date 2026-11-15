const alphabetStrip = document.getElementById("alphabet");
const alphabetCanvasSize = 220;
const alphabetPixelRatio = window.devicePixelRatio || 1;

function drawAlphabet() {
  for (let code = 65; code <= 90; code++) {
    const uppercase = String.fromCharCode(code);
    addAlphabetLetter(uppercase);
    addAlphabetLetter(uppercase.toLowerCase());
  }
}

function addAlphabetLetter(letter) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = alphabetCanvasSize * alphabetPixelRatio;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", letter);
  canvas.title = letter;
  alphabetStrip.append(canvas);

  const context = canvas.getContext("2d");
  context.scale(alphabetPixelRatio, alphabetPixelRatio);
  renderLetterTemplate(context, letter, alphabetCanvasSize, "#77dd77");
}

drawAlphabet();
