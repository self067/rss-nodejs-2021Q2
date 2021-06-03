/**
 * Boards data
 * @namespace Tasks/Service
 */

/**
 * Tasks data repository
 * @memberof Tasks/Service
 */
import tasksRepo from "./task.memory.repository";
import Task from "./task.model";

/**
 * Get all tasks by BoardID
 * @memberof Tasks/Service
 * @param {string} boardId Board ID
 * @return {Task[]}
 */
const getAll = (boardId: string): Task[] => tasksRepo.getAll(boardId),

/**
 * Get task by Id
 * @memberof Tasks/Service
 * @param {string} id Task ID
 * @param {string} boardId Board ID
 * @return {Task}
 */
    getTaskById = (id: string, boardId: string): Task | undefined => tasksRepo.getTaskById(
id,
boardId
),

/**
 * Create new Task
 * @memberof Tasks/Service
 * //  * @param {string} boardId Board ID
 * @param {Task} task Task object
 * @returns {Task} task
 */
// Const postTask = (boardId: string, task: Task): Task =>
    postTask = (task: Task): Task => tasksRepo.postTask(task),

/**
 * Update task
 * @memberof Tasks/Service
 * @param {Task} task Task object
 * @returns {Task} task
 */
    putTask = (task: Task): Task | null => tasksRepo.putTask(task),

/**
 * Delete task by BoardID
 * @memberof Tasks/Service
 * @param {string} id Task ID
 * @param {string} boardId Board ID
 * @returns {boolean}
 *
 */
    deleteTask = (id: string, boardId: string): boolean => tasksRepo.deleteTask(
id,
boardId
),

/**
 * Delete tasks by Board Id
 * @memberof Tasks/Service
 * @param {string} boardId Board ID
 * @return {boolean}
 */
    deleteTasksByBoardId = (boardId: string): boolean => tasksRepo.deleteTasksByBoardId(boardId),

/**
 * Clear UserId
 * @memberof Tasks/Service
 * @param {string} id Task ID
 * @return {boolean}
 */
    clearUserId = (id: string): boolean => tasksRepo.clearUserId(id);

export default {
    getAll,
    getTaskById,
    postTask,
    putTask,
    deleteTask,
    deleteTasksByBoardId,
    clearUserId
};
