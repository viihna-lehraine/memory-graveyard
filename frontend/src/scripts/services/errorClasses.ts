// File: frontend/src/scripts/services/errorClasses.ts

// ================================================== //
// ================================================== //

class UserFacingError extends Error {
  constructor(
    message: string,
    public userMessage?: string
  ) {
    super(message);
    this.name = 'UserFacingError';
  }
}

// ================================================== //
// ================================================== //

export interface ErrorClasses {
  UserFacingError: typeof UserFacingError;
}

// ================================================== //

export const errorClasses: ErrorClasses = {
  UserFacingError
};
