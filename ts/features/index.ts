// File: ts/features/index.ts

import type { Features } from '../types/index.js';
import { memoryFns } from './memory.js';

// ================================================== //
// ================================================== //

export const features: Features = { memory: memoryFns } as const;
