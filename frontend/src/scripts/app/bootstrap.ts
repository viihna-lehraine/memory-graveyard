// File: frontend/src/scripts/app/bootstrap.ts

import type { Data, DOMFns, Features } from '../types/index.js';

// ================================================== //
// ================================================== //

export function bootstrap(data: Data, domFns: DOMFns, features: Features): void {
  domFns.events.register(data, features.memory);
}
