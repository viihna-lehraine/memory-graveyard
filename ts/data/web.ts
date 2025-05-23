// File: ts/data/web.ts

import { Data } from '../types/index.js';

// ================================================= //
// ================================================= //

const form = document.getElementById('memory-form') as HTMLFormElement;
const input = document.getElementById('memory-input') as HTMLInputElement;
const list = document.getElementById('memory-list') as HTMLUListElement;

// ================================================= //
// ================================================= //

export const webData: Data['web'] = { form, input, list } as const;
