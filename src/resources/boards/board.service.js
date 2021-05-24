const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getBoardById = id => boardsRepo.getBoardById(id);
const postBoard = board => boardsRepo.postBoard(board);
const putBoard = board => boardsRepo.putBoard(board);
const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = { getAll, getBoardById, postBoard, putBoard, deleteBoard };
