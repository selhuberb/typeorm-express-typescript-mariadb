import { Request, Response, NextFunction } from 'express';

import { AppDataSource } from 'orm/data-sources/data-source';
import { User } from 'orm/entities/users/User';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);

  //const userRepository = conn.manager.getRepository(User);
  const userRepository = AppDataSource.getRepository(User);
  try {
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      const customError = new CustomError(404, 'General', 'Not Found', [`User with id:${id} doesn't exists.`]);
      return next(customError);
    }
    userRepository.delete(id);

    res.customSuccess(200, 'User successfully deleted.', {
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
