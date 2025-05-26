// File: frontend/src/scripts/dom/events.ts

import type { DOMFunctions, PlacedGrave } from '../types/index.js';

// ================================================= //
// ================================================= //

function updateGraveOverlaysAndTooltips(
  canvas: HTMLCanvasElement,
  placedGraves: PlacedGrave[]
): void {
  document.querySelectorAll('.grave-overlay, .grave-tooltip').forEach(el => el.remove());

  const canvasRect = canvas.getBoundingClientRect();

  for (const grave of placedGraves) {
    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'grave-overlay';
    overlay.style.position = 'absolute';
    overlay.style.left = `${canvasRect.left + grave.x}px`;
    overlay.style.top = `${canvasRect.top + grave.y}px`;
    overlay.style.width = `${grave.width}px`;
    overlay.style.height = `${grave.height}px`;
    overlay.style.cursor = 'pointer';
    overlay.style.background = 'rgba(0,0,0,0)'; // fully transparent, still receives events
    overlay.style.zIndex = '1001';
    overlay.style.pointerEvents = 'auto'; // important for receiving events!

    // tooltip (initially hidden)
    const tooltip = document.createElement('div');
    tooltip.className = 'grave-tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.left = `${canvasRect.left + grave.x}px`;
    tooltip.style.top = `${canvasRect.top + grave.y - 32}px`; // Appears above grave
    tooltip.style.minWidth = '120px';
    tooltip.style.background = '#222';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '6px 12px';
    tooltip.style.borderRadius = '8px';
    tooltip.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    tooltip.style.fontSize = '14px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.zIndex = '2000';
    tooltip.style.display = 'none';
    tooltip.textContent = grave.memory.text;

    // mouse events
    overlay.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });
    overlay.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    document.body.appendChild(overlay);
    document.body.appendChild(tooltip);
  }
}

// ================================================= //
// ================================================= //

export const eventFns: DOMFunctions['events'] = {
  updateGraveOverlaysAndTooltips
} as const;
