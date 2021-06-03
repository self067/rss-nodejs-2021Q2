/**
 * Tasks data
 * @namespace Tasks/Repository
 */
import Task from "./task.model";

/**
 * Tasks array
 * @memberof Tasks/Repository
 */

const tasks: Task[] = [],

/**
 * Get all tasks by BoardId
 * @memberof Tasks/Repository
 * @param {string} BoardId BoardId
 * @return {Task[]} Returns all tasks by BoardId
 */
    getAll = (boardId: string): Task[] => tasks.filter((item) => item.boardId === boardId) || [],

/**
 * Get task by TaskId
 * @memberof Tasks/Repository
 * @param {string} id Task Id
 * @param {string} BoardId Board Id
 * @return {Task|undefined}
 */
    getTaskById = (id: string, boardId: string): Task | undefined => tasks.find((item) => item.id === id && item.boardId === boardId),

/**
 * Create new task
 * @memberof Tasks/Repository
 * @param  {string} id Task Id
 * @param  {string} title Title of task
 * @param  {string} order Order
 * @param  {string} description Task description
 * @param  {string} userId User Id
 * @param  {string} boardId board Id
 * @param  {string} columnId Column Id
 * @return {Task}
 */
    postTask = ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
}: Task): Task => {

        tasks.push({
            id,
            title,
            order,
            description,
            userId,
            boardId,
            columnId
        });

        return {
            id,
            title,
            order,
            description,
            userId,
            boardId,
            columnId
        };

    },

/**
 * Delete task
 * @memberof Tasks/Repository
 * @param  {string} id Task id
 * @param  {string} boardId Board Id
 * @return {boolean}
 */
    deleteTask = (id: string, boardId: string): boolean => {

        const index = tasks.findIndex((item) => item.id === id && item.boardId === boardId);

        if (index === -1) {

            return false;

        }
        tasks.splice(
index,
1
);

        return true;

    },

/**
 * Update task
 * @memberof Tasks/Repository
 * @param  {string} id
 * @param  {string} title
 * @param  {string} order
 * @param  {string} description
 * @param  {string} taskId
 * @param  {string} boardId
 * @param  {string} columnId
 * @return {Task}
 */
    putTask = ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
}: Task): Task | null => {

        const index = tasks.findIndex((item) => item.id === id && item.boardId === boardId);

        if (index === -1) {

            return null;

        }
        const tsk = tasks[index];

        if (!tsk) {

            return null;

        }
        tsk.title = title;

        tsk.title = title;
        tsk.order = order;
        tsk.description = description;
        tsk.userId = userId;
  // Tasks[index].boardId = boardId;
        tsk.columnId = columnId;

        return {...tsk};

    },

/**
 * Delete tasks by board id
 * @memberof Tasks/Repository
 * @param  {string} boardId Board Id
 * @return {boolean}
 */
    deleteTasksByBoardId = (boardId: string): boolean => {

        const taskList = tasks.filter((item) => item.boardId === boardId);

        taskList.forEach((item) => deleteTask(
item.id,
boardId
));

        return true;

    },

/**
 * Clear userId
 * @memberof Tasks/Repository
 * @param  {string} userId
 * @return {boolean}
 */
    clearUserId = (userId: string): boolean => {

        tasks.forEach((item, index) => {

            if (item.userId === userId) {

                const tsk = tasks[index];

                if (tsk) {

                    tsk.userId = null;

                }

            }

        });

        return true;

    };

export default {
    getAll,
    getTaskById,
    postTask,
    deleteTask,
    putTask,
    deleteTasksByBoardId,
    clearUserId
};
