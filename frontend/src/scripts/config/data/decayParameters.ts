// File: frontend/src/scripts/config/data/decayParameters.ts

import type { ConfigData } from '../../types/index.js';

// ================================================== //
// ================================================== //

export const decayParameters: ConfigData['decayParameters'] = {
  fresh: { alpha: 1, color: '#A3C8A9', ageLimitSeconds: 60 * 60 * 3 },

  dim: { alpha: 0.85, color: '#BFC5BA', ageLimitSeconds: 60 * 60 * 24 },

  blurred: { alpha: 0.65, color: '#D7D3C7', ageLimitSeconds: 60 * 60 * 24 * 7 },

  corrupt: { alpha: 0.4, color: '#E5E1DA', ageLimitSeconds: 60 * 60 * 24 * 14 },

  dead: { alpha: 0.1, color: '#F6F5F2', ageLimitSeconds: Infinity },

  default: { alpha: 0.925, color: '#B00B69', ageLimitSeconds: 69420 }
} as const;
