let letterCanvas = document.getElementById("letter-canvas");
let letterSelect = document.getElementById("letter-select");

let context = letterCanvas.getContext("2d");
let smallerSide = Math.min(window.innerHeight, window.innerWidth)
letterCanvas.width = smallerSide;
letterCanvas.height = smallerSide;
let isDrawing = false;
let currentLetter = 'b'

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
  console.log("x: " + x + ", y: " + y);
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
  context.strokeStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
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

  selected.parts.forEach(part => {
    if (part.type === "line") {
      context.beginPath();
      context.moveTo(
        getCoordinate(part.points[0].x, part.base),
        getCoordinate(part.points[0].y, part.base)
      )
      context.lineTo(
        getCoordinate(part.points[1].x, part.base),
        getCoordinate(part.points[1].y, part.base)
      )
      context.stroke();
      context.closePath();
      return
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
      context.stroke();
      context.closePath();
      return
    }
  })

}

const letters = [
  {
    name: "a",
    parts: [
      {
        type: "line",
        points: [
          {x: 50, y: 450},
          {x: 250, y: 50},
        ],
        base: 500
      },
      {
        type: "line",
        points: [
          {x: 250, y: 50},
          {x: 450, y: 450},
        ],
        base: 500
      },
      {
        type: "line",
        points: [
          {x: 130, y: 300},
          {x: 370, y: 300},
        ],
        base: 500
      }
    ],
    size: 500
  },
  {
    name: "b",
    parts: [
      {
        type: "line",
        points: [
          {x: 150, y: 50},
          {x: 150, y: 450},
        ],
        base: 500
      },
      {
        type: "curve",
        points: [
          {x: 150, y: 50},
          {x: 380, y: 50},
          {x: 380, y: 240},
          {x: 150, y: 240},
        ],
        base: 500
      },
      {
        type: "curve",
        points: [
          {x: 150, y: 240},
          {x: 400, y: 240},
          {x: 400, y: 450},
          {x: 150, y: 450},
        ],
        base: 500
      },
    ],
    size: 500
  },
  {
    name: "c",
    parts: [
      {
        type: "curve",
        points: [
          {x: 350, y: 100},
          {x: 50, y: -50},
          {x: 50, y: 550},
          {x: 350, y: 400},
        ],
        base: 500
      }
    ],
  }
]

reportWindowSize()

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/service-worker.js');
  }
}