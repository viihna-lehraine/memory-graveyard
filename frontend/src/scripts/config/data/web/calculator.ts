// File: frontend/src/scripts/config/data/elements/calculator.ts

import type { Configuration } from '../../../types/index.js';

// ================================================= //
// ================================================= //

const canvas = document.getElementById('graph-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const calculatorInput = document.getElementById('equation-input') as HTMLInputElement;
const plotBtn = document.getElementById('plot-btn') as HTMLButtonElement;
const errorMsg = document.getElementById('error-message') as HTMLSpanElement;

/* ------------------------------------------------- */

export const calculatorWebData: Configuration['data']['web']['calculator'] = {
  canvas,
  calculatorInput,
  errorMsg,
  plotBtn
} as const;
