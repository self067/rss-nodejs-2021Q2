/**
 * Boards data
 * @namespace Boards/Service
 */

/**
 * Boards repository
 * @memberof Boards/Service
 */
const boardsRepo = require('./board.memory.repository');
/**
 * Get all boards
 * @memberof Boards/Service
 * @returns {Board[]} Returns all boards
 *
 */
const getAll = () => boardsRepo.getAll();
/**
 * Get the Board by ID
 * @memberof Boards/Service
 * @param {uuid} BoardId
 * @returns {Board}
 *
 */
const getBoardById = (id) => boardsRepo.getBoardById(id);
/**
 * Creates a new board
 * @memberof Boards/Service
 * @param {Board} new board
 * @returns {Board}
 */
const postBoard = (board) => boardsRepo.postBoard(board);
/**
 * Update board
 * @memberof Boards/Service
 * @param {Board} board updated board
 * @returns {Board}
 */
const putBoard = (board) => boardsRepo.putBoard(board);
/**
 * Delete board
 * @memberof Boards/Service
 * @param {BoardId} Board Id
 * @return {boolean}
 */
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, getBoardById, postBoard, putBoard, deleteBoard };
