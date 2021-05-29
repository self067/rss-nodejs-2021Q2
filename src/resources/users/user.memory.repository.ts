/**
 * Users data
 * @namespace Users/Repository
 */

/**
 * User array
 * @memberof Users/Repository
 */
const users = [];

/**
 * Get all Users
 * @memberof Users/Repository
 * @return {user[]}
 */
const getAll = async () => users;

/**
 * Get User by Id
 * @memberof Users/Repository
 * @param  {string} id User id
 * @returns {User}
 */
const getUserById = async (id) => users.find((item) => item.id === id);

/**
 * Create user
 * @memberof Users/Repository
 * @param  {User} user  User object {name,login, password}
 * @returns {User}
 */
const postUser = async ({ id, name, login, password }) => {
  users.push({ id, name, login, password });
  return { id, name, login, password };
};

/**
 * Delete user
 * @memberof User/Repository
 * @param {string} id User Id
 * @return {boolean}
 */
const deleteUser = async (id) => {
  const index = users.findIndex((item) => item.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};

/**
 * Update user
 * @memberof User/Repository
 * @param {User} user board
 * @returns {User}
 */
const putUser = async ({ id, name, login, password }) => {
  const index = users.findIndex((item) => item.id === id);

  if (index === -1) return null;
  users[index].name = name;
  users[index].login = login;
  users[index].password = password;
  return { ...users[index] };
};

module.exports = { getAll, postUser, getUserById, deleteUser, putUser };
