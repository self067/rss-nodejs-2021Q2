const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  if (!user) {
    res.status(404).json({
      message: `User ${id} not found`,
    });
  } else {
    res.json(User.toResponse(user));
  }
});

router.route('/').post(async (req, res) => {
  const user = new User(req.body);
  usersService.postUser(user);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  let user = new User({ ...req.body, id });
  user = await usersService.putUser(user);
  if (!user) {
    res.status(400).json({
      message: 'Bad request',
    });
  } else {
    res.json(User.toResponse(user));
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.deleteUser(id);
  // const ts =
  await tasksService.clearUserId(id);
  // console.log(ts);
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

module.exports = router;
