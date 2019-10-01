import { Router } from 'express';
import pinoHttp from 'pino-http';
import logger from '~lib/logger';
import hello from './hello';

const router = Router();
//
router.use(pinoHttp({ useLevel: 'debug', logger }));
//
router.use(hello);
//
export default router;
