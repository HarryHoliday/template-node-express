import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.use((req: Request, res: Response, next: NextFunction): void => {
  const message = 'Not found';
  res.status(404);
  res.send(message);
  next(new Error(message));
});

export default router;
