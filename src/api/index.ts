import { Router, Request, Response, NextFunction } from 'express';
import pinoHttp from 'pino-http';
import logger from '~lib/logger';
import hello from './hello';

const router = Router();
//
router.use(pinoHttp({ useLevel: 'debug', logger }));
//
router.use(hello);
//
router.use((req: Request, res: Response, next: NextFunction): void => {
  const message = 'Not found';
  res.status(404);
  res.send(message);
  next(new Error(message));
});
//
export default router;
