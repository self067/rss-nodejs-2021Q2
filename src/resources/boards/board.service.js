/**
 * Boards data
 */
const boardsRepo = require('./board.memory.repository');
/**
 * Get all boards
 * @returns {Board[]} Returns all boards
 */
const getAll = () => boardsRepo.getAll();
/**
 * Gets the Board by ID
 * @param {uuid} BoardId
 * @returns {Board}
 */
const getBoardById = (id) => boardsRepo.getBoardById(id);
/**
 * Creates a new board
 * @param {Board} new board
 * @returns {Board}
 */
const postBoard = (board) => boardsRepo.postBoard(board);
/**
 * Update board
 * @param {Board} updated board
 * @returns {Board}
 */
const putBoard = (board) => boardsRepo.putBoard(board);
/**
 * Delete board
 * @param {BoardId} Board Id
 * @return {boolean}
 */
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, getBoardById, postBoard, putBoard, deleteBoard };
