// File: frontend/src/scripts/types/base.ts

// ================================================= //
// ================ INTERFACES ===================== //
// ================================================= //

export interface Data {
  app: {
    refreshInterval: number;
    STORAGE_KEY: string;
  };
  web: {
    form: HTMLFormElement;
    input: HTMLInputElement;
    list: HTMLUListElement;
  };
}

/* ------------------------------------------------- */

export interface ErrorHandlerOptions {
  context?: Record<string, unknown>;
  fallback?: unknown;
  userMessage?: string;
}

/* ------------------------------------------------- */

export interface MemoryEntry {
  id: string;
  text: string;
  createdAt: number;
}

// ================================================= //
// ================ TYPES ========================== //
// ================================================= //

export type DecayClass = 'fresh' | 'dim' | 'blurred' | 'corrupt' | 'dead';
