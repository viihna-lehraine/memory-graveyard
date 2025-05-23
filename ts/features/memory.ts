// File: ts/features/memory.ts

import type { Data, DecayClass, MemoryEntry, MemoryFns } from '../types/index.js';

// ================================================= //
// ================================================= //

function getDecayClass(ageMinutes: number): DecayClass {
  if (ageMinutes < 5) return 'fresh' as DecayClass;
  if (ageMinutes < 15) return 'dim' as DecayClass;
  if (ageMinutes < 60) return 'blurred' as DecayClass;
  if (ageMinutes < 180) return 'corrupt' as DecayClass;
  return 'dead' as DecayClass;
}

/* ------------------------------------------------- */

function loadMemories(data: Data): MemoryEntry[] {
  const memData = localStorage.getItem(data.app.STORAGE_KEY);
  return memData ? JSON.parse(memData) : [];
}

/* ------------------------------------------------- */

function renderMemories(data: Data) {
  const list = data.web.list;

  list.innerHTML = '';

  const now = Date.now();
  const memories = loadMemories(data);

  memories.forEach(mem => {
    const ageMinutes = (now - mem.createdAt) / 1000 / 60;
    const decay = getDecayClass(ageMinutes);

    if (decay === 'dead') return;

    const li = document.createElement('li');
    li.textContent = mem.text;
    li.classList = `memory ${decay}`;
    list.appendChild(li);
  });
}

/* ------------------------------------------------- */

function saveMemories(memories: MemoryEntry[], data: Data): void {
  localStorage.setItem(data.app.STORAGE_KEY, JSON.stringify(memories));
}

// ================================================= //
// ================================================= //

export const memoryFns: MemoryFns = {
  getDecayClass,
  load: loadMemories,
  render: renderMemories,
  save: saveMemories
} as const;
