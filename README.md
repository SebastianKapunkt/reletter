# Reletter ✍️

> An interactive PWA to help young children learn to write by tracing letters and numbers.

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)]()
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)]()

### [🚀 Play the App Live 🚀](https://sebastian-kindt.com/reletter)

---

## About The Project

Reletter is an interactive PWA designed to help young children learn and practice writing latin alphabet letters (A-Z and a-z). Through guided tracing on a digital canvas, kids can develop essential fine motor skills and master correct letter formation in a simple and accessible way.
## Writing words and letters

- Choose a character from the grid to start with a clean canvas. Select a history entry to restore its saved drawing. The pencil icon opens word/sentence entry; the play icon resumes an unfinished word.
- In word mode, tap a position in the bottom word strip or use the arrow to advance. Repeated letters keep separate drawings. The final checkmark displays the whole handwritten word in the same drawing area, without templates. Tap a word-strip letter to edit it again.
- The trash icon clears only the active letter canvas; it is hidden while viewing a finished word. The grid icon returns to character selection.
- History fills from right to left and holds up to 50 entries. Free drawings are individual entries; a finished word is one grouped entry. Hover/focus highlights its whole group, and clicking any of its thumbnails restores the whole word. When restoring an older word, unfinished word drawings are preserved as a resumable history group.
- Strokes save locally after drawing and before switching. Reopening restores the active view; starting a new word replaces the previous word session.
- If storage fills, oldest history entries are discarded first. Active work, word positions, and latest-character drawings are protected. Blocked/full storage can prevent persistence; there is no warning UI or cloud backup.

Drawing uses standard [Pointer Events and pointer capture](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events), [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver), and [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem), without additional dependencies.

## 🖼️ Screenshots

<p align="center">
  <img src="https://www.sebastian-kindt.com/img/reltter_a.png" width="220" alt="Letter Template">
  &nbsp; &nbsp;
  <img src="https://www.sebastian-kindt.com/img/reletter_a_drawn.png" width="220" alt="Letter Traced">
    &nbsp; &nbsp;
  <img src="https://www.sebastian-kindt.com/img/reletter_list.png" width="220" alt="Character Selection">
</p>

## 🛠️ Built With

This project was built using the following technologies:

* HTML5
* JavaScript (ES6+)
* HTML Canvas API
* Progressive Web App (PWA) features
