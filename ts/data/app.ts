// File: ts/data/app.ts

import { Data } from '../types/index.js';

// ================================================= //
// ================================================= //

const refreshInterval = 10_000;
const STORAGE_KEY = 'memories';

// ================================================= //
// ================================================= //

export const appData: Data['app'] = { refreshInterval, STORAGE_KEY } as const;
