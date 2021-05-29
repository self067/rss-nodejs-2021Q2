import { v4 as uuidv4 } from 'uuid';
/**
 * Column data model
 * @class
 */
class Column {
  /**
   * @constructor
   * @param  {string} id Column Id
   * @param  {string} title Column title
   * @param  {number} order Order
   */

  constructor({ id = uuidv4(), title = 'COLUMN', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }
}

export default Column;
