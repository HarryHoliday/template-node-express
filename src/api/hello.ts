import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send('hello');
  } catch (error) {
    next(error);
  }
});

export default router;
