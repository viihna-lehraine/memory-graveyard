// File: frontend/src/scripts/core/utils/decay.ts

import type { Configuration, DecayClass, Utilities } from '../../types/index.js';

// ================================================== //
// ================================================== //

export const decayUtilitiesFactory = (config: Configuration): Utilities['decay'] => ({
  getAlpha(decay: DecayClass): number {
    switch (decay) {
      case 'fresh':
        return config.data.decayParameters.fresh.alpha;
      case 'dim':
        return config.data.decayParameters.dim.alpha;
      case 'blurred':
        return config.data.decayParameters.blurred.alpha;
      case 'corrupt':
        return config.data.decayParameters.corrupt.alpha;
      case 'dead':
        return config.data.decayParameters.dead.alpha;
      default:
        return config.data.decayParameters.default.alpha;
    }
  },

  /* -------------------------------------------------- */

  getColor(decay: DecayClass): string {
    switch (decay) {
      case 'fresh':
        return config.data.decayParameters.fresh.color;
      case 'dim':
        return config.data.decayParameters.dim.color;
      case 'blurred':
        return config.data.decayParameters.blurred.color;
      case 'corrupt':
        return config.data.decayParameters.corrupt.color;
      case 'dead':
        return config.data.decayParameters.dead.color;
      default:
        return config.data.decayParameters.default.color;
    }
  },

  /* -------------------------------------------------- */

  getDecayClass(ageSeconds: number): DecayClass {
    if (ageSeconds < config.data.decayParameters.fresh.ageLimitSeconds)
      return 'fresh' as DecayClass;
    if (ageSeconds < config.data.decayParameters.dim.ageLimitSeconds) return 'dim' as DecayClass;
    if (ageSeconds < config.data.decayParameters.blurred.ageLimitSeconds)
      return 'blurred' as DecayClass;
    if (ageSeconds < config.data.decayParameters.corrupt.ageLimitSeconds)
      return 'corrupt' as DecayClass;
    return 'dead' as DecayClass;
  }
});
