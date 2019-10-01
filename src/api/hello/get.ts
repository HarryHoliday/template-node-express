import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { username = '' } = req.query;
    res.send(`hello ${username}`);
  } catch (error) {
    next(error);
  }
});

export default router;
