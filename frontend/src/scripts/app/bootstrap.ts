// File: frontend/src/scripts/app/bootstrap.ts

import type {
  Configuration,
  DOMFunctions,
  Grave,
  GraveFunctions,
  Helpers,
  MemoryEntry,
  MemoryFunctions,
  Services,
  Utilities
} from '../types/index.js';

// ================================================== //
// ================================================== //

function registerGlobalErrorHandlers(services: Services): void {
  const { log } = services;

  log.info(
    `Registering global error handlers (1. handle window.onerror(), 2. handle unhandled promise rejections...)`
  );

  window.onerror = function (message, source, lineno, colno, error) {
    console.log(`Unhandled error: ${message} at ${source}:${lineno}:${colno}`);
    if (error && error.stack) {
      console.log(`Stack trace:\n${error.stack}`);
    }
    return false;
  };
  window.addEventListener('unhandledrejection', event => {
    console.log(`Unhandled promise rejection: ${event.reason}`);
  });
}

/* -------------------------------------------------- */

function registerInitialEventListeners(
  config: Configuration,
  domFns: DOMFunctions,
  graveFns: GraveFunctions,
  helpers: Helpers,
  memoryFns: MemoryFunctions,
  utils: Utilities
): void {
  const appData = config.data.app;
  const graveData = config.data.graves;
  const webData = config.data.web;

  const canvas = webData.canvas;
  const form = webData.form;
  const input = webData.input;
  const refreshInterval = appData.refreshInterval;
  const tooltip = domFns.elements.createOrUpdateGraveTooltip(null, canvas);

  const currentPlacedGraves: Grave[] = domFns.canvas.reRenderMemoriesAndOverlays(
    config,
    graveFns,
    helpers,
    memoryFns,
    utils
  );

  if (canvas && tooltip) {
    canvas.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      const grave = currentPlacedGraves.find(
        g => x >= g.x && x <= g.x + g.width && y >= g.y && y <= g.y + g.height
      );

      if (grave) {
        tooltip.textContent = grave.memory.text;
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.clientX + 16}px`;
        tooltip.style.top = `${e.clientY + 16}px`;
      } else {
        tooltip.style.display = 'none';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  }

  if (form && input) {
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const text = input.value.trim();
      if (!text) return;

      const memories = memoryFns.load(config);

      const placedGraves = memories.map(mem => ({
        x: mem.x ?? 0,
        y: mem.y ?? 0,
        width: helpers.math.weightedRandom(
          graveData.minSize,
          graveData.maxSize,
          graveData.weight.large
        ),
        height: helpers.math.weightedRandom(
          graveData.minSize,
          graveData.maxSize,
          graveData.weight.large
        )
      }));

      const canvas = webData.canvas;
      const width = helpers.math.weightedRandom(
        graveData.minSize,
        graveData.maxSize,
        graveData.weight.large
      );
      const height = helpers.math.weightedRandom(
        graveData.minSize,
        graveData.maxSize,
        graveData.weight.large
      );

      let x = 0,
        y = 0,
        tries = 0,
        fits = false;

      while (tries < graveData.maxAttempts && !fits) {
        x = Math.random() * (canvas.width - width - graveData.padding * 2) + graveData.padding;
        y = Math.random() * (canvas.height - height - graveData.padding * 2) + graveData.padding;

        fits = true;

        for (const grave of placedGraves) {
          const dx = grave.x - x;
          const dy = grave.y - y;
          const minDist = (grave.width + width) / 2 + graveData.padding;
          if (Math.sqrt(dx * dx + dy * dy) < minDist) {
            fits = false;
            break;
          }
        }

        tries++;
      }

      const memory: MemoryEntry = {
        id: crypto.randomUUID(),
        text,
        createdAt: Date.now(),
        x,
        y
      };

      memories.unshift(memory);
      memoryFns.save(memories, config);

      input.value = '';
      memoryFns.render(config, domFns, graveFns, helpers, utils);
    });
  }

  window.addEventListener('DOMContentLoaded', () =>
    memoryFns.render(config, domFns, graveFns, helpers, utils)
  );

  // refresh every 10 seconds
  setInterval(
    () => memoryFns.render(config, domFns, graveFns, helpers, utils),
    refreshInterval ?? 2_000
  );
}

// ================================================== //
// ================================================== //

export function bootstrap(
  config: Configuration,
  domFns: DOMFunctions,
  graveFns: GraveFunctions,
  helpers: Helpers,
  memoryFns: MemoryFunctions,
  services: Services,
  utils: Utilities
): void {
  registerGlobalErrorHandlers(services);

  registerInitialEventListeners(config, domFns, graveFns, helpers, memoryFns, utils);
}
