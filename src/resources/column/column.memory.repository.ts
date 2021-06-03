/**
 * Boards data
 * @namespace Columns/Repository
 *
 */
import Column from "./column.model";

/**
 * Boards array
 * @memberof Boards/Repository
 */
const columns: Column[] = [],

/**
 * Get all columns
 * @memberof Columns/Repository
 * @returns {Column[]} Returns all columns
 */
    getAll = (): Column[] => columns,

/**
 * Get the Column by ID
 * @memberof Column/Repository
 * @param {string} id ColumnId
 * @returns {Column} Column object
 *
 */
    getColumnById = (id: string): Column | undefined => columns.find((item) => item.id === id),

/**
 * Create column
 * @param {Column} column
 * @returns {Column}
 */
    postColumn = ({id, title, order}: Column): Column => {

        columns.push({id,
            title,
            order});

        return {id,
            title,
            order};

    },

/**
 * Delete column
 * @param {string} id
 * @returns {boolean}
 */
    deleteColumn = (id: string): boolean => {

        const index = columns.findIndex((item) => item.id === id);

        if (index === -1) {

            return false;

        }
        columns.splice(
index,
1
);

        return true;

    },

/**
 * Update column
 * @param {Column} column
 * @returns {Column}
 */
    putColumn = ({id, title, order}: Column): Column | null => {

        const index = columns.findIndex((item) => item.id === id),
            column = columns[index];

        if (!column || index === -1) {

            return null;

        }
        column.title = title;
        column.order = order;

        return {...column};

    };

export default {getAll,
    postColumn,
    getColumnById,
    deleteColumn,
    putColumn};
