// File: frontend/src/scripts/config/data/web.ts

import { ConfigData } from '../../../types/index.js';

// ================================================= //
// ================================================= //

const counter = document.getElementById('memory-counter') as HTMLSpanElement;
const form = document.getElementById('memory-form') as HTMLFormElement;
const graveCanvas = document.getElementById('memory-canvas') as HTMLCanvasElement;
const input = document.getElementById('memory-input') as HTMLInputElement;
const list = document.getElementById('memory-list') as HTMLUListElement;

// ================================================= //
// ================================================= //

export const graveyardWebData: ConfigData['web']['graveyard'] = {
  counter,
  form,
  graveCanvas,
  input,
  list
} as const;
