import {Router} from "express";
import Board from "./board.model";
import boardsService from "./board.service";
import tasksService from "../tasks/task.service";

const router = Router();

router.route("/").get(async (_req, res) => {

    const boards = await boardsService.getAll();

    res.json(boards.map(Board.toResponse));

});

router.route("/:id").get(async (req, res) => {

    const {id} = req.params,
        board = await boardsService.getBoardById(id);

    if (!board) {

        res.status(404).json({
            "message": `Board ${id} not found`
        });

    } else {

        res.json(Board.toResponse(board));

    }

});

router.route("/").post(async (req, res) => {

    const board = new Board(req.body);

    boardsService.postBoard(board);
    res.status(201).json(Board.toResponse(board));

});

router.route("/:id").put(async (req, res) => {

    const {id} = req.params,
        bboard = new Board({...req.body,
            id}),
        board = await boardsService.putBoard(bboard);

    if (!board) {

        res.status(400).json({
            "message": "Bad request"
        });

    } else {

        res.json(Board.toResponse(board));

    }

});

router.route("/:id").delete(async (req, res) => {

    const {id} = req.params,
        board = await boardsService.deleteBoard(id);

    await tasksService.deleteTasksByBoardId(id);

    if (!board) {

        res.status(404).json({
            "message": `Board ${id} not found`
        });

    } else {

        res.status(204).json({
            "message": "The board has been deleted"
        });

    }

});

export default router;
