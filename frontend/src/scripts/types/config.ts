// File: frontend/src/scripts/typs/config.ts

import type { DecayClass, NumberSets } from '../types/index.js';

// ================================================== //
// ================================================== //

export interface AppData {
  refreshInterval: number;
  STORAGE_KEY: string;
}

/* -------------------------------------------------- */

export type DecayParameters = Record<
  DecayClass | 'default',
  {
    alpha: number;
    color: string;
    ageLimitSeconds: number;
  }
>;

/* -------------------------------------------------- */

export interface GraveData {
  minSize: number;
  maxSize: number;
  maxAttempts: number;
  padding: number;
  weight: {
    small: number;
    large: number;
  };
}

/* -------------------------------------------------- */

export interface RegexData {
  floatString: RegExp;
  integerString: RegExp;
  numberString: RegExp;
}

/* -------------------------------------------------- */

export interface WebData {
  calculator: {
    canvas: HTMLCanvasElement;
    calculatorInput: HTMLInputElement;
    errorMsg: HTMLSpanElement;
    plotBtn: HTMLButtonElement;
  };
  graveyard: {
    counter: HTMLSpanElement;
    form: HTMLFormElement;
    graphCanvas: HTMLCanvasElement;
    graveCanvas: HTMLCanvasElement;
    input: HTMLInputElement;
    list: HTMLUListElement;
  };
}

// ================================================== //
// ================================================== //

export interface ConfigData {
  app: AppData;
  decayParameters: DecayParameters;
  graves: GraveData;
  regex: RegexData;
  web: {
    calculator: WebData['calculator'];
    graveyard: WebData['graveyard'];
  };
}

/* -------------------------------------------------- */

export interface MathConfig {
  sets: NumberSets;
}

// ================================================== //
// ================================================== //

export interface Configuration {
  data: ConfigData;
  math: MathConfig;
}
