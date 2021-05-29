import { v4 as uuidv4 } from 'uuid';
import { IBoard } from '../../types.d.ts';

/**
 * Board data model
 * @class
 */
export default class Board {
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
