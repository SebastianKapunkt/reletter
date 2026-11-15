const handwritingGuides = [50, 180, 310, 440];
const [topLine, middleLine, baselineLine, descenderLine] = handwritingGuides;
const letterLayouts = createLetterLayouts();

function createLetterLayouts() {
  const namespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(namespace, "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.style.cssText = "position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none;";

  const path = document.createElementNS(namespace, "path");
  svg.append(path);
  document.body.append(svg);

  const layouts = new Map();
  for (const letter of letters) {
    const parts = letter.parts.map(part => ({
      type: part.type,
      points: part.points.map(point => ({
        x: point.x * 500 / part.base,
        y: point.y * 500 / part.base
      }))
    }));
    const metrics = getLetterMetrics(letter, parts, path);
    const alignedParts = alignLetterParts(parts, metrics);
    layouts.set(letter.name, {parts: alignedParts});
  }

  svg.remove();
  return layouts;
}

// SVG measures the actual curve extrema; control points can lie outside the visible letter.
function measureLetterParts(parts, path) {
  const commands = parts.map(part => {
    const points = part.points.map(point => `${point.x} ${point.y}`);
    const command = part.type === "line" ? "L" : "C";
    return `M ${points[0]} ${command} ${points.slice(1).join(" ")}`;
  });
  path.setAttribute("d", commands.join(" "));
  return path.getBBox();
}

function getLetterMetrics(letter, parts, path) {
  const name = letter.name;
  const bounds = measureLetterParts(parts, path);
  const uppercase = /^[A-Z]$/.test(name);
  const ascender = !uppercase && "bdfhklt".includes(name);
  const descender = !uppercase && "gjpqy".includes(name);

  let bodyTop = bounds.y;
  if ("bd".includes(name)) {
    bodyTop = measureLetterParts(parts.filter(part => part.type === "curve"), path).y;
  } else if ("hk".includes(name)) {
    bodyTop = measureLetterParts(parts.slice(1), path).y;
  } else if ("ijl".includes(name)) {
    bodyTop = 180;
  } else if ("ft".includes(name)) {
    bodyTop = 190;
  }

  const bottom = bounds.y + bounds.height;
  const descenderBaselines = {g: 295, j: 395, p: 380, q: 380, y: 375};
  const baseline = descender ? descenderBaselines[name] : bottom;
  const bodyScale = (baselineLine - middleLine) / (baseline - bodyTop);
  const ascenderScale = ascender ? (middleLine - topLine) / (bodyTop - bounds.y) : bodyScale;

  // The straight y tail intentionally stops halfway to the bottom guide.
  let descenderScale = bodyScale;
  if (descender && name !== "y") {
    descenderScale = (descenderLine - baselineLine) / (bottom - baseline);
  }

  let widthScale = 0.75;
  if ("bd".includes(name)) widthScale = 0.85;
  if (name === "g") widthScale = 1;

  let width = bounds.width * bodyScale * widthScale;
  if (uppercase) {
    const uppercaseWidths = {I: 0, J: 145, L: 170, M: 250, W: 250};
    width = uppercaseWidths[name] ?? 200;
    if ("BDEFPR".includes(name)) {
      width = bounds.width * (baselineLine - topLine) / bounds.height;
    }
  }

  return {
    bounds,
    uppercase,
    ascender,
    descender,
    bodyTop,
    baseline,
    bodyScale,
    ascenderScale,
    descenderScale,
    width
  };
}

function alignLetterParts(parts, metrics) {
  const {
    bounds, uppercase, ascender, descender, bodyTop, baseline,
    bodyScale, ascenderScale, descenderScale, width
  } = metrics;
  const xScale = bounds.width ? width / bounds.width : 1;

  // Keep each Bézier under one transform; remapping control points by zone distorts the curve.
  return parts.map(part => {
    const aboveBody = ascender && part.points.every(point => point.y <= bodyTop);
    const belowBody = descender && part.points.every(point => point.y >= baseline);
    return {
      type: part.type,
      points: part.points.map(point => {
        let y = middleLine + (point.y - bodyTop) * bodyScale;
        if (uppercase) {
          y = topLine + (point.y - bounds.y) * (baselineLine - topLine) / bounds.height;
        } else if (aboveBody || (ascender && part.type === "line" && point.y < bodyTop)) {
          y = middleLine + (point.y - bodyTop) * ascenderScale;
        } else if (belowBody || (descender && part.type === "line" && point.y > baseline)) {
          y = baselineLine + (point.y - baseline) * descenderScale;
        }
        return {
          x: (500 - width) / 2 + (point.x - bounds.x) * xScale,
          y
        };
      })
    };
  });
}

function drawHandwritingGuides(context, size) {
  const scale = size / 500;
  context.save();
  context.lineWidth = Math.max(0.5, size / 700);
  context.strokeStyle = "rgba(82, 101, 120, 0.20)";
  for (const position of handwritingGuides) {
    context.setLineDash(position === middleLine ? [size / 100, size / 100] : []);
    context.beginPath();
    context.moveTo(0, position * scale);
    context.lineTo(size, position * scale);
    context.stroke();
  }
  context.restore();
}

function renderLetterTemplate(context, letter, size, color) {
  const layout = letterLayouts.get(letter);
  if (!layout) return;

  drawHandwritingGuides(context, size);

  const scale = size / 500;
  context.save();
  context.lineWidth = size / 16;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = color;
  context.beginPath();
  for (const part of layout.parts) {
    const points = part.points.map(point => ({
      x: point.x * scale,
      y: point.y * scale
    }));
    context.moveTo(points[0].x, points[0].y);
    if (part.type === "line") {
      context.lineTo(points[1].x, points[1].y);
    } else {
      context.bezierCurveTo(
        points[1].x, points[1].y,
        points[2].x, points[2].y,
        points[3].x, points[3].y
      );
    }
  }
  context.stroke();
  context.restore();
  context.beginPath();
}
