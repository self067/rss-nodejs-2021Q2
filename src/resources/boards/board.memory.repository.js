const boards = [];

const getAll = async () => boards;
const getBoardById = async id => boards.find(item => item.id === id);

const postBoard = async ({ id, title, columns }) => {
  boards.push({ id, title, columns });
  return { id, title, columns };
};

const deleteBoard = async id => {
  const index = boards.findIndex(item => item.id === id);
  if (index === -1) return false;
  boards.splice(index, 1);

  return true;
};

const putBoard = async ({ id, title, columns }) => {
  const index = boards.findIndex(item => item.id === id);

  if (index === -1) return null;
  boards[index].title = title;
  boards[index].columns = columns;
  return { ...boards[index] };
};

module.exports = { getAll, getBoardById, postBoard, deleteBoard, putBoard };
