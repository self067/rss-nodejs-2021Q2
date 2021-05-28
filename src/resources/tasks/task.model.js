const { v4: uuidv4 } = require('uuid');
/**
 * Task data model
 * @class
 */
class Task {
  /**
   * @constructor
   * @param  {string} id Task Id
   * @param  {string} title Task title
   * @param  {number} order Task order
   * @param  {string} description Task description
   * @param  {string} userId User Id
   * @param  {string} boardId Board Id
   * @param  {string} columnId Column Id
   */
  constructor({
    id = uuidv4(),
    title = 'TASK',
    order = 'ASC',
    description = 'DESCRIPT',
    userId,
    boardId,
    columnId,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /**
   * Task to response
   * @param  {object} task
   * @return {object}
   */
  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return {
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    };
  }
}

module.exports = Task;
