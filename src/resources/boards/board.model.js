const { v4: uuidv4 } = require('uuid');
/**
 * Board data model
 * @class
 */
class Board {
  /**
   * @constructor
   * @param  {string} id Board Id
   * @param  {string} title Board title
   * @param  {string} columns Columns
   */
  constructor({ id = uuidv4(), title = 'BOARD', columns = 'user' } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * Board to response
   * @param  {object} board
   * @return {object}
   */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
