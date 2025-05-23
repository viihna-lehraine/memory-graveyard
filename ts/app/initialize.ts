// File: ts/app/initialize.ts

// ================================================== //
// ================================================== //

export function initialize(): void {
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
