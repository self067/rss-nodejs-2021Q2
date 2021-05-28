/**
 * Boards data
 * @namespace Columns/Repository

 */

/**
 * Boards array
 * @memberof Boards/Repository
 */
const columns = [];
/**
 * Get all columns
 * @memberof Columns/Repository
 * @returns {Column[]} Returns all columns
 */
const getAll = async () => columns;
/**
 * Get the Column by ID
 * @memberof Column/Repository
 * @param {uuid} ColumnId
 * @returns {Column} Column object
 *
 */
const getColumnById = async (id) => columns.find((item) => item.id === id);

const postColumn = async ({ id, name, login, password }) => {
  columns.push({ id, name, login, password });
  return { id, name, login, password };
};

const deleteColumn = async (id) => {
  const index = columns.findIndex((item) => item.id === id);
  if (index === -1) return false;
  columns.splice(index, 1);
  return true;
};

const putColumn = async ({ id, title, order }) => {
  const index = columns.findIndex((item) => item.id === id);
  if (index === -1) return null;
  columns[index].title = title;
  columns[index].order = order;

  return { ...columns[index] };
};

module.exports = { getAll, postColumn, getColumnById, deleteColumn, putColumn };
