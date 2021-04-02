import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';

import cors from 'cors';

import routes from './routes';
import AppError from './errors/AppError';

import './database';

// Express initialization
const app = express();

// Permission for external connections
app.use(cors());

app.use(express.json());
app.use(routes);

// Joi Validations
app.use(errors());

// Global exception handling
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // If the error is an instance of the apperror class
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  // End
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
