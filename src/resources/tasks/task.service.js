/**
 * Boards data
 * @namespace Tasks/Service
 */

/**
 * Tasks data repository
 * @memberof Tasks/Service
 */
const tasksRepo = require('./task.memory.repository');
/**
 * Get all tasks by BoardID
 * @memberof Tasks/Service
 * @param {BoardId} Board ID
 * @return {Task[]}
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);
/**
 * Get task by BoardID
 * @memberof Tasks/Service
 * @param {Id} Task ID
 * @param {BoardId} Board ID
 */
const getTaskById = (id, boardId) => tasksRepo.getTaskById(id, boardId);
/**
 * Get all tasks by BoardID
 * @memberof Tasks/Service
 * @param {BoardId} Board ID
 */
const postTask = (boardId, task) => tasksRepo.postTask(boardId, task);
/**
 * Get all tasks by BoardID
 * @memberof Tasks/Service
 * @param {BoardId} Board ID
 */
const putTask = (task) => tasksRepo.putTask(task);
/**
 * Get all tasks by BoardID
 * @memberof Tasks/Service
 * @param {BoardId} Board ID
 */
const deleteTask = (id, boardId) => tasksRepo.deleteTask(id, boardId);
/**
 * Delete tasks by Board Id
 * @memberof Tasks/Service
 * @param {BoardId} Board ID
 */
const deleteTasksByBoardId = (boardId) =>
  tasksRepo.deleteTasksByBoardId(boardId);
/**
 * Get all tasks by BoardID
 * @memberof Tasks/Service
 * @param {BoardId} Board ID
 */
const clearUserId = (id) => tasksRepo.clearUserId(id);

module.exports = {
  getAll,
  getTaskById,
  postTask,
  putTask,
  deleteTask,
  deleteTasksByBoardId,
  clearUserId,
};
