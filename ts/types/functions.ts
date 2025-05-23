// File: ts/types/functions.ts

import type { Data, DecayClass, MemoryEntry } from './base.js';

// ================================================= //
// ================================================= //

export interface DOMFns {
  events: {
    register: (data: Data, memoryFns: MemoryFns) => void;
  };
}

/* ------------------------------------------------- */

export interface MemoryFns {
  getDecayClass: (ageMinutes: number) => DecayClass;
  load: (data: Data) => MemoryEntry[];
  render: (data: Data) => void;
  save: (memories: MemoryEntry[], data: Data) => void;
}

// ================================================= //
// ================ COMPOSITE ====================== //
// ================================================= //

export interface Features {
  memory: MemoryFns;
}

export interface CommonFunctionsGroup {
  core: { noop: () => void };
  helpers: {};
  utilities: {};
}
