/**
 * Tasks data
 * @namespace Tasks/Repository
 */

/**
 * Tasks array
 * @memberof Tasks/Repository
 */
const tasks = [];
/**
 * Get all tasks by BoardId
 * @memberof Tasks/Repository
 * @param {string} BoardId BoardId
 * @return {Task[]} Returns all tasks by BoardId
 */
const getAll = async (boardId) =>
  tasks.filter((item) => item.boardId === boardId);
/**
 * Get task by TaskId
 * @memberof Tasks/Repository
 * @param {string} id Task Id
 * @param {string} BoardId Board Id
 * @return {Task}
 */
const getTaskById = async (id, boardId) =>
  tasks.find((item) => item.id === id && item.boardId === boardId);

/**
 * Create new task
 * @memberof Tasks/Repository
 * @param  {string} id Task Id
 * @param  {string} title Title of task
 * @param  {number} order Order
 * @param  {string} description Task description
 * @param  {string} userId User Id
 * @param  {string} boardId board Id
 * @param  {string} columnId Column Id
 * @return {Task}
 */
const postTask = async ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId,
}) => {
  tasks.push({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  return {
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };
};
/**
 * Delete task
 * @memberof Tasks/Repository
 * @param  {string} id Task id
 * @param  {string} boardId Board Id
 * @return {boolean}
 */
const deleteTask = async (id, boardId) => {
  const index = tasks.findIndex(
    (item) => item.id === id && item.boardId === boardId
  );
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};
/**
 * Update task
 * @memberof Tasks/Repository
 * @param  {string} id
 * @param  {string} title
 * @param  {number} order
 * @param  {string} description
 * @param  {string} taskId
 * @param  {string} boardId
 * @param  {string} columnId
 * @return {Task}
 */
const putTask = async ({
  id,
  title,
  order,
  description,
  taskId,
  boardId,
  columnId,
}) => {
  const index = tasks.findIndex(
    (item) => item.id === id && item.boardId === boardId
  );

  if (index === -1) return null;
  tasks[index].title = title;
  tasks[index].order = order;
  tasks[index].description = description;
  tasks[index].taskId = taskId;
  // tasks[index].boardId = boardId;
  tasks[index].columnId = columnId;

  return { ...tasks[index] };
};
/**
 * Delete tasks by board id
 * @memberof Tasks/Repository
 * @param  {string} boardId Board Id
 * @return {boolean}
 */
const deleteTasksByBoardId = async (boardId) => {
  const taskList = tasks.filter((item) => item.boardId === boardId);
  taskList.forEach((item) => deleteTask(item.id, boardId));
  return true;
};
/**
 * Clear userId
 * @memberof Tasks/Repository
 * @param  {string} userId
 */
const clearUserId = async (userId) => {
  tasks.forEach((item, index) => {
    if (item.userId === userId) tasks[index].userId = null;
  });

  return true;
};

module.exports = {
  getAll,
  getTaskById,
  postTask,
  deleteTask,
  putTask,
  deleteTasksByBoardId,
  clearUserId,
};
