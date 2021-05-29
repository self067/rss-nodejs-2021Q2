/**
 * Boards data
 * @namespace Tasks/Service
 */

/**
 * Tasks data repository
 * @memberof Tasks/Service
 */
import tasksRepo from './task.memory.repository.ts';
/**
 * Get all tasks by BoardID
 * @memberof Tasks/Service
 * @param {string} boardId Board ID
 * @return {Task[]}
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);
/**
 * Get task by Id
 * @memberof Tasks/Service
 * @param {string} id Task ID
 * @param {string} boardId Board ID
 */
const getTaskById = (id, boardId) => tasksRepo.getTaskById(id, boardId);
/**
 * Create new Task
 * @memberof Tasks/Service
 * @param {string} boardId Board ID
 * @param {object} task Task object
 * @returns {object} task
 */
const postTask = (boardId, task) => tasksRepo.postTask(boardId, task);
/**
 * Update task
 * @memberof Tasks/Service
 * @param {object} task Task object
 * @returns {object} task
 */
const putTask = (task) => tasksRepo.putTask(task);
/**
 * Delete task by BoardID
 * @memberof Tasks/Service
 * @param {string} id Task ID
 * @param {string} boardId Board ID
 */
const deleteTask = (id, boardId) => tasksRepo.deleteTask(id, boardId);
/**
 * Delete tasks by Board Id
 * @memberof Tasks/Service
 * @param {string} boardId Board ID
 */
const deleteTasksByBoardId = (boardId) =>
  tasksRepo.deleteTasksByBoardId(boardId);
/**
 * Clear UserId
 * @memberof Tasks/Service
 * @param {string} id Task ID
 */
const clearUserId = (id) => tasksRepo.clearUserId(id);

export {
  getAll,
  getTaskById,
  postTask,
  putTask,
  deleteTask,
  deleteTasksByBoardId,
  clearUserId,
};
