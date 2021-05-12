const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/);
  const tasks = await tasksService.getAll(r[1]);
  // map task fields to exclude secret fields like "password"
  res.json(tasks);
});
// Get Task by boardId and taskId
router.route('/:id').get(async (req, res) => {
  const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/);
  const { id } = req.params;
  const task = await tasksService.getTaskById(id, r[1]);
  if (!task) {
    res.status(404).json({
      message: `Task ${id} not found`,
    });
  } else {
    res.json(Task.toResponse(task));
  }
});

// :boardId/tasks
router.route('/').post(async (req, res) => {
  const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/);
  const task = new Task({ ...req.body, boardId: r[1] });
  tasksService.postTask(task);
  res.status(201).json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/);
  const boardId = r[1];
  const { id } = req.params;
  let task = new Task({ ...req.body, id, boardId });
  task = await tasksService.putTask(task);
  if (!task) {
    res.status(400).json({
      message: 'Bad request',
    });
  } else {
    res.json(Task.toResponse(task));
  }
});

router.route('/:id').delete(async (req, res) => {
  const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/);
  const { id } = req.params;
  const task = await tasksService.deleteTask(id, r[1]);
  if (!task) {
    res.status(404).json({
      message: `Task ${id} not found`,
    });
  } else {
    res.status(204).json({
      message: 'The task has been deleted',
    });
  }
});

module.exports = router;
