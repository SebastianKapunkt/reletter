let letterCanvas = document.getElementById("letter-canvas");
let letterSelect = document.getElementById("letter-select");

let context = letterCanvas.getContext("2d");
let smallerSide = Math.min(window.innerHeight, window.innerWidth)
letterCanvas.width = smallerSide;
letterCanvas.height = smallerSide;
let isDrawing = false;
let currentLetter = 'Z'

function getSource(event) {
  if (event.touches) {
    return event.touches[0]
  } else {
    return event
  }
}

function getClientCanvasCoordinates(event) {
  const {clientX, clientY} = getSource(event);
  const x = clientX - letterCanvas.getBoundingClientRect().left;
  const y = clientY - letterCanvas.getBoundingClientRect().top;
  return {x, y};
}

function drawing(event) {
  if (isDrawing) {
    let point = getClientCanvasCoordinates(event);
    context.lineTo(point.x, point.y);
    context.stroke();
  }
  event.preventDefault();
}

function startDrawing(event) {
  isDrawing = true;
  event.preventDefault();
  context.beginPath();
  context.lineWidth = smallerSide / 16;
  context.lineCap = "round";
  context.strokeStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--draw-color');
}

function stopDrawing() {
  isDrawing = false;
}

letterCanvas.addEventListener('touchstart', startDrawing);
letterCanvas.addEventListener('mousedown', startDrawing);

letterCanvas.addEventListener('touchmove', drawing);
letterCanvas.addEventListener('mousemove', drawing);

letterCanvas.addEventListener('touchend', stopDrawing);
letterCanvas.addEventListener('mouseup', stopDrawing);

function reportWindowSize() {
  smallerSide = Math.min(window.innerHeight, window.innerWidth)
  letterCanvas.width = smallerSide;
  letterCanvas.height = smallerSide;
  clearCanvas()
}

window.addEventListener('resize', reportWindowSize);

function selectLetter(letter) {
  context.clearRect(0, 0, letterCanvas.width, letterCanvas.height);
  currentLetter = letter
  drawLetterTemplate(letter)
  letterSelect.style.display = "none";
}

function openLetterSelection() {
  letterSelect.style.display = "grid";
}

function clearCanvas() {
  context.clearRect(0, 0, letterCanvas.width, letterCanvas.height);
  drawLetterTemplate(currentLetter)
}

function getCoordinate(point, base) {
  return (point * smallerSide) / base
}

function drawLetterTemplate(letter) {
  let selected = letters.find(l => l.name === letter)
  context.lineWidth = smallerSide / 16;
  context.lineCap = "round";
  context.strokeStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
  context.beginPath();
  selected.parts.forEach(part => {
    if (part.type === "line") {
      context.moveTo(
        getCoordinate(part.points[0].x, part.base),
        getCoordinate(part.points[0].y, part.base)
      )
      context.lineTo(
        getCoordinate(part.points[1].x, part.base),
        getCoordinate(part.points[1].y, part.base)
      )
    }
    if (part.type === "curve") {
      context.beginPath();
      context.moveTo(
        getCoordinate(part.points[0].x, part.base),
        getCoordinate(part.points[0].y, part.base)
      )
      context.bezierCurveTo(
        getCoordinate(part.points[1].x, part.base),
        getCoordinate(part.points[1].y, part.base),
        getCoordinate(part.points[2].x, part.base),
        getCoordinate(part.points[2].y, part.base),
        getCoordinate(part.points[3].x, part.base),
        getCoordinate(part.points[3].y, part.base)
      )
    }
    context.stroke();
  })
  context.closePath();
}

reportWindowSize()

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  this.deferredPrompt = e;
  document.getElementById('pwa-install').style.display = 'flex';
});

async function installPwa() {
  if (this.deferredPrompt !== null) {
    this.deferredPrompt.prompt();
    const {outcome} = await this.deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      this.deferredPrompt = null;
    }
  }
}