let letterCanvas = document.getElementById("letter-canvas");
let letterSelect = document.getElementById("letter-select");

let context = letterCanvas.getContext("2d");
let smallerSide = Math.max(1, Math.min(window.innerHeight, window.innerWidth) - 32);
letterCanvas.width = smallerSide;
letterCanvas.height = smallerSide;
let isDrawing = false;
let currentLetter = 'A';

function getSource(event) {
  if (event.touches) {
    return event.touches[0];
  } else {
    return event;
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
  setStrokeStyle('--draw-color');
}

function stopDrawing() {
  isDrawing = false;
}

letterCanvas.addEventListener('touchstart', startDrawing, {passive: false});
letterCanvas.addEventListener('mousedown', startDrawing);

letterCanvas.addEventListener('touchmove', drawing, {passive: false});
letterCanvas.addEventListener('mousemove', drawing);

letterCanvas.addEventListener('touchend', stopDrawing);
letterCanvas.addEventListener('mouseup', stopDrawing);

function reportWindowSize() {
  smallerSide = Math.max(1, Math.min(window.innerHeight, window.innerWidth) - 32);
  letterCanvas.width = smallerSide;
  letterCanvas.height = smallerSide;
  clearCanvas();
}

window.addEventListener('resize', reportWindowSize);

function selectLetter(letter) {
  context.clearRect(0, 0, letterCanvas.width, letterCanvas.height);
  currentLetter = letter;
  drawLetterTemplate(letter);
  letterSelect.style.display = "none";
}

function openLetterSelection() {
  letterSelect.style.display = "grid";
}

function clearCanvas() {
  context.clearRect(0, 0, letterCanvas.width, letterCanvas.height);
  drawLetterTemplate(currentLetter);
}

function setStrokeStyle(color) {
  context.lineWidth = smallerSide / 16;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = window.getComputedStyle(document.documentElement).getPropertyValue(color);
}

function drawLetterTemplate(letter) {
  const color = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
  renderLetterTemplate(context, letter, smallerSide, color);
}

reportWindowSize();

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
