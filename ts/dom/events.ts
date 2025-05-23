// File: ts/dom/events.ts

import type { Data, DOMFns, MemoryEntry, MemoryFns } from '../types/index.js';

// ================================================= //
// ================================================= //

function registerEventListeners(data: Data, memoryFns: MemoryFns): void {
  const form = data.web.form;
  const input = data.web.input;
  const refreshInterval = data.app.refreshInterval;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    const memory: MemoryEntry = {
      id: crypto.randomUUID(),
      text,
      createdAt: Date.now()
    };
    const memories = memoryFns.load(data);

    memories.unshift(memory); // add new memory to beginning of the array
    memoryFns.save(memories, data);

    input.value = '';
    memoryFns.render(data);
  });

  window.addEventListener('DOMContentLoaded', () => memoryFns.render(data));

  // refresh every 10 seconds
  setInterval(() => memoryFns.render(data), refreshInterval ?? 10_000);
}

// ================================================= //
// ================================================= //

export const eventFns: DOMFns['events'] = { register: registerEventListeners };
