/**
 * Boards data
 * @namespace Boards/Repository

 */

/**
 * Boards array
 * @memberof Boards/Repository
 */
const boards = [];
/**
 * Get all boards
 * @memberof Boards/Repository
 * @returns {Board[]} Returns all boards
 */
const getAll = async () => boards;
/**
 * Get the Board by ID
 * @memberof Boards/Repository
 * @param {uuid} BoardId
 * @returns {Board} Board object
 *
 */
const getBoardById = async (id) => boards.find((item) => item.id === id);
/**
 * Creates a new board
 * @memberof Boards/Repository
 * @param {Board} new board
 * @returns {Board}
 */

const postBoard = async ({ id, title, columns }) => {
  boards.push({ id, title, columns });
  return { id, title, columns };
};
/**
 * Delete board
 * @memberof Boards/Repository
 * @param {BoardId} Board Id
 * @return {boolean}
 */

const deleteBoard = async (id) => {
  const index = boards.findIndex((item) => item.id === id);
  if (index === -1) return false;
  boards.splice(index, 1);

  return true;
};
/**
 * Update board
 * @memberof Boards/Repository
 * @param {Board} updated board
 * @returns {Board}
 */

const putBoard = async ({ id, title, columns }) => {
  const index = boards.findIndex((item) => item.id === id);

  if (index === -1) return null;
  boards[index].title = title;
  boards[index].columns = columns;
  return { ...boards[index] };
};

module.exports = { getAll, getBoardById, postBoard, deleteBoard, putBoard };
