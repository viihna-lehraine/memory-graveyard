// File: frontend/src/scripts/dom/canvas.ts

import type {
  Data,
  DOMFunctions,
  GraveFunctions,
  Helpers,
  MemoryFunctions,
  PlacedGrave,
  Utilities
} from '../types/index.js';

// ================================================== //
// ================================================== //

function reRenderMemoriesAndOverlays(
  data: Data,
  graveFns: GraveFunctions,
  helpers: Helpers,
  memoryFns: MemoryFunctions,
  utils: Utilities
): PlacedGrave[] {
  let currentPlacedGraves: PlacedGrave[] = [];

  currentPlacedGraves = memoryFns.render(data, canvasFns, graveFns, helpers, utils);

  return currentPlacedGraves;
}

/* -------------------------------------------------- */

function resizeCanvasToContainer(canvas: HTMLCanvasElement): void {
  const parent = canvas.parentElement;
  if (!parent) return;

  // get the computed style of the parent element
  const rect = parent.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  // only resize if the dimensions have changed
  if (
    canvas.width !== Math.round(rect.width * dpr) ||
    canvas.height !== Math.round(rect.height * dpr)
  ) {
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }
}

// ================================================== //
// ================================================== //

export const canvasFns: DOMFunctions['canvas'] = {
  reRenderMemoriesAndOverlays,
  resizeToContainer: resizeCanvasToContainer
} as const;
