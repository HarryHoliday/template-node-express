import { Router } from 'express';
import pinoHttp from 'pino-http';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerSpec';
import logger from '~lib/logger';
import hello from './hello';
import notFound from './notFound';

const router = Router();
//
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//
router.use(pinoHttp({ useLevel: 'debug', logger }));
//
router.use(hello);
// must be at last line
router.use(notFound);
//
export default router;
