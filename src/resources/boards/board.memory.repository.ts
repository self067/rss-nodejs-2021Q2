/**
 * Boards data
 * @namespace Boards/Repository
 */
import Board from "./board.model";

/**
 * Boards array
 * @memberof Boards/Repository
 */
const boards: Board[] = [],

/**
 * Get all boards
 * @memberof Boards/Repository
 * @returns {Board[]} Returns all boards
 */
    getAll = (): Board[] => boards,

/**
 * Get the Board by ID
 * @memberof Boards/Repository
 * @param {string} id BoardId
 * @returns {Board} Board object
 *
 */
    getBoardById = (id: string): Board | undefined => boards.find((item) => item.id === id),

/**
 * Creates a new board
 * @memberof Boards/Repository
 * @param {Board} board new board
 * @returns {Board}
 */

    postBoard = ({id, title, columns}: Board): Board => {

        boards.push({id,
            title,
            columns});

        return {id,
            title,
            columns};

    },

/**
 * Delete board
 * @memberof Boards/Repository
 * @param {string} id Board Id
 * @return {boolean}
 */
    deleteBoard = (id: string): boolean => {

        const index = boards.findIndex((item) => item.id === id);

        if (index === -1) {

            return false;

        }
        boards.splice(
index,
1
);

        return true;

    },

/**
 * Update board
 * @memberof Boards/Repository
 * @param {Board} updated board
 * @returns {Board}
 */
    putBoard = ({id, title, columns}: Board): Board | null => {

        const index = boards.findIndex((item) => item.id === id),
            board = boards[index];

        if (index === -1 || !board) {

            return null;

        }
        board.title = title;
        board.columns = columns;

        return {...board};

    };

export default {getAll,
    getBoardById,
    postBoard,
    deleteBoard,
    putBoard};
