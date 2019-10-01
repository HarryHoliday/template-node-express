import { Router } from 'express';
import get from './get';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: hello
 *     description: hello world
 * */

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - hello
 *     summary: hello world
 *     description: return hello [username]
 *     produces:
 *       - application/x-www-form-urlencoded
 *     parameters:
 *       - name: username
 *         description: Username to say hello
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: hello [username]
 */
router.get('/', get);

export default router;
