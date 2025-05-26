// File: frontend/src/scripts/features/calculator/graph.ts

import type { Configuration } from '../../types/index.js';

// =================================================== //
// =================================================== //

const importConfig = async (): Promise<Configuration> => {
  const { config } = await import('../../config/index.js');

  return config;
};

const config = await importConfig();

// =================================================== //

const width = canvas.width;
const height = canvas.height;

/* ------------------------------------------------- */

// graphing window (coordinates)
let xMin = -10,
  xMax = 10;
let yMin = -5,
  yMax = 5;

/* ------------------------------------------------- */

function screenToWorldX(px: number): number {
  return xMin + (px / width) * (xMax - xMin);
}

/* ------------------------------------------------- */

function worldToScreenY(y: number): number {
  return height - ((y - yMin) / (yMax - yMin)) * height;
}

/* ------------------------------------------------- */

function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
}

/* ------------------------------------------------- */

function plotFunction(expr: MathNode) {
  ctx.save();
  ctx.strokeStyle = '#2d63d6';
  ctx.lineWidth = 2;
  ctx.beginPath();

  let started = false;
  for (let px = 0; px < WIDTH; px++) {
    const x = screenToWorldX(px);
    let y: number;
    try {
      y = expr.evaluate({ x });
      if (typeof y !== 'number' || !isFinite(y)) {
        started = false;
        continue;
      }
    } catch {
      started = false;
      continue;
    }
    const py = worldToScreenY(y);

    if (!started) {
      ctx.moveTo(px, py);
      started = true;
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.stroke();
  ctx.restore();
}

/* ------------------------------------------------- */

function render() {
  clearCanvas();
  drawAxes();
  let expr: MathNode;
  try {
    expr = parse(input.value);
    errorMsg.textContent = '';
    plotFunction(expr);
  } catch (e) {
    errorMsg.textContent = 'Invalid expression!';
  }
}

/* ------------------------------------------------- */

plotBtn.onclick = render;
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') render();
});

/* ------------------------------------------------- */

render(); // Initial plot
