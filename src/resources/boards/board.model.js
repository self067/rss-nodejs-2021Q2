const { v4: uuidv4 } = require('uuid');
/**
 * Board data model
 * @class
 */
class Board {
  /**
   * @constructor
   * @param {(id,title,columns)}
   */
  constructor({ id = uuidv4(), title = 'BOARD', columns = 'user' } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
