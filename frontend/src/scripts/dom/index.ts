// File: frontend/src/scripts/dom/events.ts

import type { DOMFunctions } from '../types/index.js';
import { eventFns } from './events.js';
import { canvasFns } from './canvas.js';
import { elementFns } from './elements.js';

// ================================================== //
// ================================================== //

export const domFns: DOMFunctions = {
  canvas: canvasFns,
  events: eventFns,
  elements: elementFns
} as const;
