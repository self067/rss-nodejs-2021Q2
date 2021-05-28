/**
 * Users data
 * @namespace Users/Service
 */

/**
 * Users data repository
 * @memberof Users/Service
 */
const usersRepo = require('./user.memory.repository');
/**
 * Get all Users
 * @memberof Users/Service
 * @return {user[]}
 */
const getAll = () => usersRepo.getAll();
/**
 * Get User by Id
 * @memberof Users/Service
 * @param  {string} id User id
 * @returns {User}
 */
const getUserById = (id) => usersRepo.getUserById(id);
/**
 * Create user
 * @memberof Users/Service
 * @param  {User} user  User object {name,login, password}
 * @returns {User}
 */
const postUser = (user) => usersRepo.postUser(user);
/**
 * Update user
 * @memberof User/Service
 * @param {User} user board
 * @returns {User}
 */
const putUser = (user) => usersRepo.putUser(user);
/**
 * Delete user
 * @memberof User/Service
 * @param {string} id User Id
 * @return {boolean}
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getUserById, postUser, deleteUser, putUser };
