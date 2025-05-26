// File: frontend/src/scripts/types/functions.ts

import type {
  Configuration,
  DecayClass,
  Float,
  Grave,
  Integer,
  MemoryEntry,
  NonNegativeInteger,
  NonNegativeNumber,
  NonZeroNumber,
  NonZeroInteger,
  Percentile,
  PositiveInteger,
  PositiveNumber,
  SignedPercentile,
  UnitInterval
} from './index.js';
import { ErrorHandler, Logger } from '../services/index.js';

// ================================================= //
// ====== 1. HIGHER ORDER FUNCTION OBJECTS ========= //
// ================================================= //

export interface DOMFunctions {
  canvas: {
    reRenderMemoriesAndOverlays(
      config: Configuration,
      graveFns: GraveFunctions,
      helpers: Helpers,
      memoryFns: MemoryFunctions,
      utils: Utilities
    ): Grave[];
    resizeToContainer: (canvas: HTMLCanvasElement) => void;
  };
  events: {
    updateGraveOverlaysAndTooltips: (canvas: HTMLCanvasElement, placedGraves: Grave[]) => void;
  };
  elements: {
    cleanUpOldTooltips: (currentGraveIds: Set<Grave['memory']['id']>) => void;
    createOrUpdateGraveTooltip: (grave: Grave | null, canvas: HTMLCanvasElement) => HTMLDivElement;
  };
}

/* ------------------------------------------------- */

export interface GraveFunctions {
  draw: (ctx: CanvasRenderingContext2D, options: Grave, utils: Utilities) => void;
}
/* ------------------------------------------------- */

export interface MemoryFunctions {
  load(config: Configuration): MemoryEntry[];
  render(
    config: Configuration,
    domFns: DOMFunctions,
    graveFns: GraveFunctions,
    helpers: Helpers,
    utils: Utilities
  ): Grave[];
  save(memories: MemoryEntry[], config: Configuration): void;
}

// ================================================== //
// ========= 2. CORE FUNCTION OBJECTS ================== //
// ================================================== //

export interface Helpers {
  app: { noop: () => void };
  brand: {
    asBrandedFromString<T>(str: string, check: (n: number) => boolean, brand: (n: number) => T): T;
    asFloat: (x: number) => Float;
    asInteger: (x: number) => Integer;
    asNonNegativeInteger: (x: number) => NonNegativeInteger;
    asNonNegativeNumber: (x: number) => NonNegativeNumber;
    asNonZeroInteger: (x: number) => NonZeroInteger;
    asNonZeroNumber: (x: number) => NonZeroNumber;
    asPercentile: (x: number) => Percentile;
    asPositiveInteger: (x: number) => PositiveInteger;
    asPositiveNumber: (x: number) => PositiveNumber;
    asSignedPercentile: (x: number) => SignedPercentile;
    asUnitInterval: (x: number) => UnitInterval;
  };
  math: { weightedRandom: (min: number, max: number, weight: number) => number };
}

/* ------------------------------------------------- */

export type Services = {
  errors: ErrorHandler;
  log: Logger;
};

/* ------------------------------------------------- */

export interface Utilities {
  decay: {
    getAlpha: (decay: DecayClass) => number;
    getColor: (decay: DecayClass) => string;
    getDecayClass: (createdAt: number, now: number) => DecayClass;
  };
  typeguards: {
    isFloat: (value: number) => value is Float;
    isFloatString: (string: string) => boolean;
    isInteger: (value: number) => value is Integer;
    isIntegerString: (string: string) => boolean;
    isNonNegativeInteger: (value: number) => value is NonNegativeInteger;
    isNonNegativeNumber: (value: number) => value is NonNegativeNumber;
    isNonZeroInteger: (value: number) => value is NonZeroInteger;
    isNonZeroNumber: (value: number) => value is NonZeroNumber;
    isPercentile: (value: number) => value is Percentile;
    isPositiveInteger: (value: number) => value is PositiveInteger;
    isPositiveNumber: (value: number) => value is PositiveNumber;
    isSignedPercentile: (value: number) => value is SignedPercentile;
    isUnitInterval: (value: number) => value is UnitInterval;
    parseNumberString(str: string): Float | Integer | undefined;
  };
}

// ================================================== //
// ======= CORE FUNCTION OBJECT PARTIALS ============ //
// ================================================== //

export type CanvasFunctions = DOMFunctions['canvas'];
export type ElementFunctions = DOMFunctions['elements'];
export type EventsFunctions = DOMFunctions['events'];

/* -------------------------------------------------- */

export type AppHelpers = Helpers['app'];
export type BrandHelpers = Helpers['brand'];
export type MathHelpers = Helpers['math'];

/* -------------------------------------------------- */

export type DecayUtilities = Utilities['decay'];
export type Typeguards = Utilities['typeguards'];
