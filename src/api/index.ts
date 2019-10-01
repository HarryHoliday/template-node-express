import { Router } from 'express';
import pinoHttp from 'pino-http';
import swaggerUi from 'swagger-ui-express';
import logger from '~lib/logger';
import swaggerSpec from './swaggerSpec';
import notFound from './notFound';

import hello from './hello';

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
