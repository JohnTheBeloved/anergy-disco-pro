/* eslint-disable max-classes-per-file */
class ApplicationError extends Error {
 public message: string = 'ApplicationError';

 public status: number = 500;

 constructor(message?: string, status?: number) {
   super();
   if (message != null) {
     this.message = message;
   }
   if (status != null) {
     this.status = status;
   }
 }
}

class BadRequest extends ApplicationError {
  constructor(message?: string) {
    super(message || 'Bad request', 400);
  }
}

export {
  ApplicationError,
  BadRequest
};
