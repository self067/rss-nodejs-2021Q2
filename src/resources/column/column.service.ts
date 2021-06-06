/**
 * Columns data
 * @namespace Columns/Service
 */

/**
 * Columns data repository
 * @memberof Columns/Service
 */
import columnsRepo from "./column.memory.repository";
import Column from "./column.model";

/**
 * Get all columns
 * @memberof Columns/Service
 * @returns {Column[]} Returns all columns
 *
 */
const getAll = (): Column[] => columnsRepo.getAll(),

/**
 * Get column by ID
 * @memberof Columns/Service
 * @param {string} id Column ID
 * @returns {Column}
 */
    getColumnById = (id: string): Column | undefined => columnsRepo.getColumnById(id),

/**
 * Create column
 * @memberof Columns/Service
 * @param {Column} column New Column
 * @returns {Column}
 */
    postColumn = (column: Column): Column => columnsRepo.postColumn(column),

/**
 * Update column
 * @memberof Columns/Service
 * @param {Column} column Column object
 * @returns {Column}
 */
    putColumn = (column: Column): Column | null => columnsRepo.putColumn(column),

/**
 * Delete column
 * @memberof Columns/Service
 * @param {string} id Column ID
 * @returns {boolean}
 */
    deleteColumn = (id: string): boolean => columnsRepo.deleteColumn(id);

export default {getAll,
    getColumnById,
    postColumn,
    putColumn,
    deleteColumn};
