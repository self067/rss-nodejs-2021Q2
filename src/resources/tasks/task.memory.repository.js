const tasks = [];

const getAll = async boardId => tasks.filter(item => item.boardId === boardId);
const getTaskById = async (id, boardId) =>
  tasks.find(item => item.id === id && item.boardId === boardId);

const postTask = async ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
}) => {
  tasks.push({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });
  return {
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  };
};

const deleteTask = async (id, boardId) => {
  const index = tasks.findIndex(
    item => item.id === id && item.boardId === boardId
  );
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

const putTask = async ({
  id,
  title,
  order,
  description,
  taskId,
  boardId,
  columnId
}) => {
  const index = tasks.findIndex(
    item => item.id === id && item.boardId === boardId
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

const deleteTasksByBoardId = async boardId => {
  const taskList = tasks.filter(item => item.boardId === boardId);
  taskList.forEach(item => deleteTask(item.id, boardId));
  return true;
};

const clearUserId = async userId => {
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
  clearUserId
};
