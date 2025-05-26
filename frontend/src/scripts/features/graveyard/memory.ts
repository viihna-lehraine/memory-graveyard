// File: frontend/src/scripts/features/graveyard/memory.ts

import type {
  Configuration,
  DOMFunctions,
  Grave,
  GraveFunctions,
  Helpers,
  MemoryEntry,
  MemoryFunctions,
  Utilities
} from '../../types/index.js';

// ================================================= //
// ================================================= //

export function loadMemories(config: Configuration): MemoryEntry[] {
  const memData = localStorage.getItem(config.data.app.STORAGE_KEY);
  return memData ? JSON.parse(memData) : [];
}

/* ------------------------------------------------- */

export function renderMemories(
  config: Configuration,
  domFns: DOMFunctions,
  graveFns: GraveFunctions,
  helpers: Helpers,
  utils: Utilities
): Grave[] {
  const graves: Grave[] = [];

  const canvas = config.data.web.canvas;
  const counter = config.data.web.counter;

  if (!canvas) return [];
  const ctx = canvas.getContext('2d');
  if (!ctx) return [];

  domFns.canvas.resizeToContainer(canvas);

  const now = Date.now();
  const memories = loadMemories(config);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const mem of memories) {
    const width = helpers.math.weightedRandom(
      config.data.graves.minSize,
      config.data.graves.maxSize,
      config.data.graves.weight.small
    );
    const height = width;

    let x = 0,
      y = 0,
      tries = 0;
    let fits = false;

    while (tries < config.data.graves.maxAttempts && !fits) {
      x =
        Math.random() * (canvas.width - width - config.data.graves.padding * 2) +
        config.data.graves.padding;
      y =
        Math.random() * (canvas.height - height - config.data.graves.padding * 2) +
        config.data.graves.padding;

      fits = true;
      for (const grave of graves) {
        const dx = grave.x - x;
        const dy = grave.y - y;
        const minDist = (grave.width + width) / 2 + config.data.graves.padding;
        if (Math.sqrt(dx * dx + dy * dy) < minDist) {
          fits = false;
          break;
        }
      }
      tries++;
    }

    graves.push({ x, y, width, height, memory: mem });

    const decay = utils.decay.getDecayClass(mem.createdAt, now);
    const previewText = mem.text.slice(0, 12);

    graveFns.draw(ctx, { x, y, width, height, decay, text }, utils);
  }

  if (counter) {
    counter.textContent = `Memories buried: ${memories.length}`;
  }

  return graves;
}

export function saveMemories(memories: MemoryEntry[], config: Configuration): void {
  localStorage.setItem(config.data.app.STORAGE_KEY, JSON.stringify(memories));
}

// ================================================== //
// ================================================== //

export const memoryFns: MemoryFunctions = {
  load: loadMemories,
  render: renderMemories,
  save: saveMemories
} as const;
