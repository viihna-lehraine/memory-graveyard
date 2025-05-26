// File: frontend/src/scripts/config/data/index.ts

import type { ConfigData } from '../../types/index.js';
import { appData } from './app.js';
import { decayParameters } from './decayParameters.js';
import { gravesData } from './graves.js';
import { regexData } from './regex.js';
import { webData } from './web/graveyard.js';

// ================================================== //
// ================================================== //

export const data: ConfigData = {
  app: appData,
  decayParameters,
  graves: gravesData,
  regex: regexData,
  web: webData
} as const;
