// File: frontend/src/scripts/main.ts

// =================================================== //
// =================================================== //

async function main(): Promise<void> {
  const { bootstrap } = await import('./app/bootstrap.js');
  const { initialize } = await import('./app/initialize.js');

  const { data } = await import('./data/index.js');
  const { domFns } = await import('./dom/index.js');
  const { features } = await import('./features/index.js');

  bootstrap(data, domFns, features);
  initialize();
}

// =================================================== //
// =================================================== //

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
