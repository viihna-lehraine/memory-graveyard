// File: frontend/src/scripts/data/index.ts

import type { Data } from '../types/index.js';
import { appData } from './app.js';
import { webData } from './web.js';

// ================================================= //
// ================================================= //

export const data: Data = { app: appData, web: webData } as const;
