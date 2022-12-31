import { Request, Response, NextFunction } from "express";

export interface IError extends Error {
  status?: number;
}

export class ErrorsService {
  static notFound(req: Request, res: Response, next: NextFunction) {
    const error: Partial<IError> = new Error("Not found");
    error.status = 404;
    next(error);
  }

  static catchError(
    ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ) {
    return (req: Request, res: Response, next: NextFunction) => {
      return ftn(req, res, next).catch((error) => {
        const err: Partial<IError> = new Error("Falla intermitente");
        err.message = error.message;
        err.stack = error.stack;
        err.status = 409;

        next(err);
      });
    };
  }

  static generic(
    error: IError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const objError: IError = {
      name: error.name,
      status: error.status ?? 500,
      message: error.message,
    };

    if (process.env.NODE_ENV !== "production") {
      objError.stack = error.stack;
    }

    res.status(objError.status as number).json(objError);
  }
}