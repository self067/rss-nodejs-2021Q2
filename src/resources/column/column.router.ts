import {Router} from "express";
import Column from "./column.model";
import columnsService from "./column.service";

const router = Router();

router.route("/").get(async (_req, res) => {

    const columns = await columnsService.getAll();

    res.json(columns.map(Column.toResponse));

});

router.route("/:id").get(async (req, res) => {

    const {id} = req.params,
        column = await columnsService.getColumnById(id);

    if (!column) {

        res.status(404).json({
            "message": `Column ${id} not found`
        });

    } else {

        res.json(Column.toResponse(column));

    }

});

router.route("/").post(async (req, res) => {

    const column = new Column(req.body);

    columnsService.postColumn(column);
    res.json(Column.toResponse(column));

});

router.route("/:id").put(async (req, res) => {

    const {id} = req.params,
        clmn = new Column({...req.body,
            id}),
        column = await columnsService.putColumn(clmn);

    if (!column) {

        res.status(400).json({
            "message": "Bad request"
        });

    } else {

        res.json(Column.toResponse(column));

    }

});

router.route("/:id").delete(async (req, res) => {

    const {id} = req.params,
        column = await columnsService.deleteColumn(id);

    if (!column) {

        res.status(404).json({
            "message": `Column ${id} not found`
        });

    } else {

        res.status(204).json({
            "message": "The column has been deleted"
        });

    }

});

module.exports = router;
