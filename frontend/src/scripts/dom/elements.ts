// File: frontend/src/scripts/dom/elements.ts

import type { DOMFunctions, Grave } from '../types/index.js';

// ================================================== //
// ================================================== //

function cleanUpOldTooltips(currentGraveIds: Set<Grave['memory']['id']>): void {
  document.querySelectorAll('.grave-tooltip').forEach(el => {
    if (!currentGraveIds.has(el.id.replace('grave-tooltip-', ''))) {
      el.remove();
    }
  });
}

/* -------------------------------------------------- */

function createOrUpdateGraveTooltip(
  grave: Grave | null,
  canvas: HTMLCanvasElement
): HTMLDivElement {
  if (!grave) {
    return document.createElement('div');
  }
  const id = `grave-tooltip-${grave.memory.id}`;
  let tooltip = document.getElementById(id) as HTMLDivElement | null;

  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = id;
    tooltip.className = 'grave-tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.zIndex = '1000';
    document.body.appendChild(tooltip);
  }
  tooltip.textContent = grave.memory.text;
  const rect = canvas.getBoundingClientRect();
  tooltip.style.left = `${rect.left + grave.x}px`;
  tooltip.style.top = `${rect.top + grave.y - 32}px`;
  tooltip.style.display = 'none'; // hidden by default

  return tooltip;
}

// ================================================== //
// ================================================== //

export const elementFns: DOMFunctions['elements'] = {
  cleanUpOldTooltips,
  createOrUpdateGraveTooltip
} as const;
