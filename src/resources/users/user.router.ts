import { Router } from 'express';
import User from './user.model';
import usersService from './user.service';
import tasksService from '../tasks/task.service';
import { StatusCodes } from 'http-status-codes';
// Import { IUser } from '../../types';

const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params,
    user = await usersService.getUserById(id);

  if (!user) {
    res.status(StatusCodes.NOT_FOUND).json({
      message: `User ${id} not found`,
    });
  } else {
    res.json(User.toResponse(user));
  }
});

router.route('/').post(async (req, res) => {
  const user = new User(req.body);

  usersService.postUser(user);
  res.status(StatusCodes.CREATED).json(User.toResponse(user)); //201
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params,
    user = new User({ ...req.body, id }),
    iuser = await usersService.putUser(user);

  if (!iuser) {
    res.status(400).json({
      message: 'Bad request',
    });
  } else {
    res.json(User.toResponse(iuser));
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params,
    user = await usersService.deleteUser(id);
  // Const ts =

  await tasksService.clearUserId(id);
  // Console.log(ts);
  if (!user) {
    res.status(404).json({
      message: `User ${id} not found`,
    });
  } else {
    res.status(204).json({
      message: 'The user has been deleted',
    });
  }
});

export default router;
