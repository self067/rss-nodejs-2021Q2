import {v4 as uuidv4} from "uuid";

/**
 * Task data model
 * @class
 */
class Task {

    id: string;

    title: string;

    order: string;

    description: string;

    userId: string | null;

    boardId: string;

    columnId: string;

  /**
   * @constructor
   * @param  {string} id Task Id
   * @param  {string} title Task title
   * @param  {string} order Task order
   * @param  {string} description Task description
   * @param  {string} userId User Id
   * @param  {string} boardId Board Id
   * @param  {string} columnId Column Id
   */
    constructor ({
    id = uuidv4(),
    title = "TASK",
    order = "ASC",
    description = "DESCRIPT",
    userId,
    boardId,
    columnId
  }: Task) {

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
   * @param  {Task} task
   * @return {Task}
   */
    static toResponse (task: Task): Task {

        const {id, title, order, description, userId, boardId, columnId} = task;

        return {
            id,
            title,
            order,
            description,
            userId,
            boardId,
            columnId
        };

    }

}

export default Task;
