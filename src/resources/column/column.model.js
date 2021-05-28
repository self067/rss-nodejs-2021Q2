const { v4: uuidv4 } = require('uuid');
/**
 * Column data model
 * @class
 */
class Column {
  /**
   * @constructor
   * @param {(id,title,columns)}
   */

  constructor({ id = uuidv4(), title = 'COLUMN', order = 'order' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }
}

module.exports = Column;
