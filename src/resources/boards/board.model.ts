import { v4 as uuidv4 } from 'uuid';

/**
 * Board data model
 * @class
 */
export default class Board {
  id: string;

  title: string;

  columns: string;

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
   * @param  {Board} board
   * @return {Board}
   */
  static toResponse(board: Board): Board {
    const { id, title, columns } = board;

    return { id, title, columns };
  }
}
