import {v4 as uuidv4} from "uuid";

/**
 * Column data model
 * @class
 */
class Column {

    id: string;

    title: string;

    order: string;

  /**
   * @constructor
   * @param  {string} id Column Id
   * @param  {string} title Column title
   * @param  {string} order Order
   */

    constructor ({id = uuidv4(), title = "COLUMN", order = "ASC"} = {}) {

        this.id = id;
        this.title = title;
        this.order = order;

    }

    static toResponse (column: Column): Column {

        const {id, title, order} = column;

        return {id,
            title,
            order};

    }

}

export default Column;
