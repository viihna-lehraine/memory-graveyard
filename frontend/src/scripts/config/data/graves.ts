// File: frontend/src/scripts/config/data/graves.ts

import type { ConfigData } from '../../types/index.js';

// ================================================== //
// ================================================== //

const minSize = 32;

const maxSize = 64;

const maxAttempts = 100;

const padding = 100;

const weight = {
  small: 2,
  large: 0.5
};

// ================================================= //
// ================================================= //

export const gravesData: ConfigData['graves'] = {
  minSize,
  maxSize,
  maxAttempts,
  padding,
  weight
} as const;
