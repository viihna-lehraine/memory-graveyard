// File: frontend/src/scripts/data/index.ts

import type { Configuration } from '../types/index.js';
import { data } from './data/index.js';
import { math } from './math/index.js';

// ================================================= //
// ================================================= //

export const config: Configuration = {
  data,
  math
} as const;
