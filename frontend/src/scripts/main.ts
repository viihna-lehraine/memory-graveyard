// File: frontend/src/scripts/main.ts

// =================================================== //
// =================================================== //

async function main(): Promise<void> {
  console.log('Executing main application loop...');

  console.log(`Importing primary initialization function...`);
  const { initializeApp } = await import('./app/initialize.js');

  console.log(`Initializing application...`);
  const { helpers, services, utilities } = await initializeApp();
  console.log(`Application initialized successfully.`);
  const { log } = services;

  log.info(`Importing primary app configuration object...`);
  const { config } = await import('./config/index.js');
  log.info(`App object imported successfully.`);

  log.info(`Executing application bootstrap process...`);
  const { bootstrap } = await import('./app/bootstrap.js');
  log.info(`Bootstrap process execution complete.`);

  log.info(`Importing DOM functions object...`);
  const { domFns } = await import('./dom/index.js');
  log.info(`DOM functions object imported successfully.`);

  log.info(`Proceeding to Feature Import Cascade...`);

  log.info(`1a. Importing grave functions object...`);
  const { graveFns } = await import('./features/grave.js');
  log.info(`1b. Grave functions object imported successfully.`);

  log.info(`2a. Importing memory functions object...`);
  const { memoryFns } = await import('./features/memory.js');
  log.info(`2b. Memory functions object imported successfully.`);

  log.info(`Feature Import Cascade complete.`);

  log.info(`Executing application bootstrap process...`);
  bootstrap(config, domFns, graveFns, helpers, memoryFns, services, utilities);
  log.info(`Application bootstrap process execution complete.`);

  log.info('Startup tasks complete. End of main application loop reached.');
}

// =================================================== //
// =================================================== //

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
