const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getTaskById = (id, boardId) => tasksRepo.getTaskById(id, boardId);
const postTask = (boardId, task) => tasksRepo.postTask(boardId, task);
const putTask = task => tasksRepo.putTask(task);
const deleteTask = (id, boardId) => tasksRepo.deleteTask(id, boardId);
const deleteTasksByBoardId = boardId => tasksRepo.deleteTasksByBoardId(boardId);
const clearUserId = id => tasksRepo.clearUserId(id);

module.exports = {
  getAll,
  getTaskById,
  postTask,
  putTask,
  deleteTask,
  deleteTasksByBoardId,
  clearUserId
};
