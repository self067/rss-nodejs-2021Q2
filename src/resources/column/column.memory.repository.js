const columns = [];

const getAll = async () => columns;
const getColumnById = async id => columns.find(item => item.id === id);

const postColumn = async ({ id, name, login, password }) => {
  columns.push({ id, name, login, password });
  return { id, name, login, password };
};

const deleteColumn = async id => {
  const index = columns.findIndex(item => item.id === id);
  if (index === -1) return false;
  columns.splice(index, 1);
  return true;
};

const putColumn = async ({ id, title, order }) => {
  const index = columns.findIndex(item => item.id === id);
  if (index === -1) return null;
  columns[index].title = title;
  columns[index].order = order;

  return { ...columns[index] };
};

module.exports = { getAll, postColumn, getColumnById, deleteColumn, putColumn };
