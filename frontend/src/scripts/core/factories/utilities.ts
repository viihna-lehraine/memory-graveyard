// File: frontend/src/scripts/core/factories/utilities.ts

import type { Configuration, Utilities } from '../../types/index.js';

// ================================================== //
// ================================================== //

export async function utilitiesFactory(config: Configuration): Promise<Utilities> {
  console.log(`Creating 'Utilities' object.`);
  const utilities = {} as Utilities;

  const [{ decayUtilitiesFactory }] = await Promise.all([import('../utils/decay.js')]);

  utilities.decay = decayUtilitiesFactory(config);

  console.log(`[UTILITIES_FACTORY]: 'Utilities' object has been successfully created.`);

  return utilities;
}
