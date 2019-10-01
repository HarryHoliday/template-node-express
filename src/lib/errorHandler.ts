import { Router, Request, Response } from 'express';
import logger from './logger';

interface HttpError extends Error {
  status?: number;
}

const router = Router();
// TODO: check below
// https://medium.com/@iaincollins/error-handling-in-javascript-a6172ccdf9af
//
// eslint-disable-next-line
process.on('unhandledRejection', (reason: Error | any, promise?: Promise<void>): void => {
  logger.error('unhandledRejection');
  logger.error(reason || {});
  // unhandledRejections.set(promise, reason);
});
//
process.on('rejectionHandled', (promise: Promise<void>): void => {
  logger.error('rejectionHandled');
  logger.error(promise);
  // unhandledRejections.delete(promise);
});
//
process.on('uncaughtException', (err: Error, origin?: string): void => {
  logger.error('uncaughtException');
  const message = `\nCaught exception: ${err.message}\nException origin: ${origin}`;
  logger.error(message);
  // process.exit(1);
});

router.use((req: Request, res: Response): void => {
  res.status(404);
  res.send('Not found');
});

router.use((err: HttpError, req: Request, res: Response): void => {
  logger.error(err);
  res.status(err.status || 500);
  if (!res.headersSent) {
    res.status(500);
    res.json(err);
  }
});

export default router;
