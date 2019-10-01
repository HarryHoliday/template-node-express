import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { username = '' } = req.query;
    res.send(`hello ${username}`);
  } catch (error) {
    next(error);
  }
};
