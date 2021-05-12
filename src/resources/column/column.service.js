const columnsRepo = require('./column.memory.repository');

const getAll = () => columnsRepo.getAll();
const getColumnById = id => columnsRepo.getColumnById(id);
const postColumn = column => columnsRepo.postColumn(column);
const putColumn = column => columnsRepo.putColumn(column);
const deleteColumn = id => columnsRepo.deleteColumn(id);

module.exports = {
  getAll,
  getColumnById,
  postColumn,
  putColumn,
  deleteColumn
};
