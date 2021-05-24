const router = require('express').Router();
const Column = require('./column.model');
const columnsService = require('./column.service');

router.route('/').get(async (req, res) => {
  const columns = await columnsService.getAll();
  res.json(columns.map(Column.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const column = await columnsService.getColumnById(id);
  if (!column) {
    res.status(404).json({
      message: `Column ${id} not found`
    });
  } else {
    res.json(Column.toResponse(column));
  }
});

router.route('/').post(async (req, res) => {
  const column = new Column(req.body);
  columnsService.postColumn(column);
  res.json(Column.toResponse(column));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  let column = new Column({ ...req.body, id });
  column = await columnsService.putColumn(column);
  if (!column) {
    res.status(400).json({
      message: 'Bad request'
    });
  } else {
    res.json(Column.toResponse(column));
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const column = await columnsService.deleteColumn(id);
  if (!column) {
    res.status(404).json({
      message: `Column ${id} not found`
    });
  } else {
    res.status(204).json({
      message: 'The column has been deleted'
    });
  }
});

module.exports = router;
