// File: frontend/src/scripts/features/graveyard/grave.ts

import type { Grave, GraveFunctions, Utilities } from '../../types/index.js';

// ================================================== //
// ================================================== //

function drawGrave(ctx: CanvasRenderingContext2D, options: Grave, utils: Utilities): void {
  const { x, y, width, height, decay, text } = options;

  ctx.save();

  ctx.globalAlpha = utils.decay.getAlpha(decay);
  ctx.fillStyle = utils.decay.getColor(decay);

  // draw a simple rectangular grave
  ctx.fillRect(x, y, width, height);

  ctx.fillStyle = '#222222FF';
  ctx.font = 'bold 12px serif';
  ctx.fillText(text, x + 4, y + height / 2);

  ctx.restore();
}

// ================================================== //
// ================================================== //

export const graveFns: GraveFunctions = {
  draw: drawGrave
} as const;
