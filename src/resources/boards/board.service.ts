/**
 * Boards data
 * @namespace Boards/Service
 */

/**
 * Boards repository
 * @memberof Boards/Service
 */
// Import { Board } from 'types';
import boardsRepo from "./board.memory.repository";
import Board from "./board.model";

/**
 * Get all boards
 * @memberof Boards/Service
 * @returns {Board[]} Returns all boards
 *
 */
const getAll = (): Board[] => boardsRepo.getAll(),

/**
 * Get the Board by ID
 * @memberof Boards/Service
 * @param {string} id BoardId
 * @returns {Board}
 *
 */
    getBoardById = (id: string): Board | undefined => boardsRepo.getBoardById(id),

/**
 * Creates a new board
 * @memberof Boards/Service
 * @param {Board} board  new board
 * @returns {Board}
 */
    postBoard = (board: Board): Board => boardsRepo.postBoard(board),

/**
 * Update board
 * @memberof Boards/Service
 * @param {Board} board updated board
 * @returns {Board}
 */
    putBoard = (board: Board): Board | null => boardsRepo.putBoard(board),

/**
 * Delete board
 * @memberof Boards/Service
 * @param {string} id Board Id
 * @return {boolean}
 */
    deleteBoard = (id: string): boolean => boardsRepo.deleteBoard(id);

export default {getAll,
    getBoardById,
    postBoard,
    putBoard,
    deleteBoard};
