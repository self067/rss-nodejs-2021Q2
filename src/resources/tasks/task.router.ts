import {Router} from "express";
import Task from "./task.model";

import tasksService from "./task.service";

const router = Router();

router.route("/").get(async (req, res) => {

    const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/),
        boardId = r && r[1] ? r[1] : "",
        tasks = await tasksService.getAll(boardId);
  // Map task fields to exclude secret fields like "password"

    res.json(tasks);

});
// Get Task by boardId and taskId
router.route("/:id").get(async (req, res) => {

    const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/),
        {id} = req.params,
        boardId = r && r[1] ? r[1] : "",
        task = await tasksService.getTaskById(
id,
boardId
);

    if (!task) {

        res.status(404).json({
            "message": `Task ${id} not found`
        });

    } else {

        res.json(Task.toResponse(task));

    }

});

// :boardId/tasks
router.route("/").post(async (req, res) => {

    const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/),
        boardId = r && r[1] ? r[1] : "",
        task = new Task({...req.body,
            boardId});

    tasksService.postTask(task);
    res.status(201).json(Task.toResponse(task));

});

router.route("/:id").put(async (req, res) => {

    const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/),
        boardId = r && r[1] ? r[1] : "",
        {id} = req.params,
        tsk = new Task({...req.body,
            id,
            boardId}),
        task = await tasksService.putTask(tsk);

    if (!task) {

        res.status(400).json({
            "message": "Bad request"
        });

    } else {

        res.json(Task.toResponse(task));

    }

});

router.route("/:id").delete(async (req, res) => {

    const r = req.baseUrl.match(/\/?boards\/(.*)\/tasks/),
        {id} = req.params,
        boardId = r && r[1] ? r[1] : "",
        task = await tasksService.deleteTask(
id,
boardId
);

    if (!task) {

        res.status(404).json({
            "message": `Task ${id} not found`
        });

    } else {

        res.status(204).json({
            "message": "The task has been deleted"
        });

    }

});

export default router;
