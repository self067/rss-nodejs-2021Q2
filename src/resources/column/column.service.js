/**
 * Columns data
 * @namespace Columns/Service
 */

/**
 * Columns data repository
 * @memberof Columns/Service
 */
const columnsRepo = require('./column.memory.repository');

/**
 * Get all columns
 * @memberof Columns/Service
 * @returns {Column[]} Returns all columns
 *
 */
const getAll = () => columnsRepo.getAll();
/**
 * Get column by ID
 * @memberof Columns/Service
 * @param {Id} id Column ID
 * @returns {Column}
 */
const getColumnById = (id) => columnsRepo.getColumnById(id);
/**
 * Create column
 * @memberof Columns/Service
 * @param {object} column New Column
 * @returns {Column}
 */
const postColumn = (column) => columnsRepo.postColumn(column);

/**
 * Update column
 * @memberof Columns/Service
 * @param {object} column Column object
 * @returns {Column}
 */
const putColumn = (column) => columnsRepo.putColumn(column);

/**
 * Delete column
 * @memberof Columns/Service
 * @param {Id} id Column ID
 * @returns {boolean}
 */
const deleteColumn = (id) => columnsRepo.deleteColumn(id);

module.exports = {
  getAll,
  getColumnById,
  postColumn,
  putColumn,
  deleteColumn,
};
