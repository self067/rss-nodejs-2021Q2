const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = id => usersRepo.getUserById(id);
const postUser = user => usersRepo.postUser(user);
const putUser = user => usersRepo.putUser(user);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getUserById, postUser, deleteUser, putUser };
