// File: frontend/src/scripts/config/data/app.ts

import { ConfigData } from '../../types/index.js';

// ================================================= //
// ================================================= //

const refreshInterval = 2_000;

const STORAGE_KEY = 'memories';

// ================================================= //
// ================================================= //

export const appData: ConfigData['app'] = { refreshInterval, STORAGE_KEY } as const;
