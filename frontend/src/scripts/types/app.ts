// File: frontend/src/scripts/types/app.ts

// ================================================= //
// ================================================= //

export type DecayClass = 'fresh' | 'dim' | 'blurred' | 'corrupt' | 'dead';

/* ------------------------------------------------- */

export interface ErrorHandlerOptions {
  context?: Record<string, unknown>;
  fallback?: unknown;
  userMessage?: string;
}

/* ------------------------------------------------- */

export type Grave = {
  x: number;
  y: number;
  width: number;
  height: number;
  decay: DecayClass;
  memory: MemoryEntry;
  text: string;
};

/* ------------------------------------------------- */

export type MemoryEntry = {
  id: string;
  text: string;
  createdAt: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};
