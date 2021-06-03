/**
 * Users data
 * @namespace Users/Repository
 */
import User from './user.model';

/**
 * User array
 * @memberof Users/Repository
 */
const users: User[] = [];
/**
 * Get all Users
 * @memberof Users/Repository
 * @return {User[]}
 */
const getAll = (): User[] => users;
/**
 * Get User by Id
 * @memberof Users/Repository
 * @param  {string} id User id
 * @returns {User | undefined}
 */

const getUserById = (id: string): User | undefined =>
  users.find((item: User) => item.id === id);
/**
 * Create user
 * @memberof Users/Repository
 * @param  {User} user  User object {name,login, password}
 * @returns {User}
 */
const postUser = ({ id, name, login, password }: User): User => {
  users.push({ id, name, login, password });

  return { id, name, login, password };
};
/**
 * Delete user
 * @memberof User/Repository
 * @param {string} id User Id
 * @return {boolean}
 */
const deleteUser = (id: string): boolean => {
  const index = users.findIndex((item) => item.id === id);

  if (index === -1) {
    return false;
  }
  users.splice(index, 1);

  return true;
};
/**
 * Update user
 * @memberof User/Repository
 * @param {User} user board
 * @returns {User}
 */
const putUser = ({ id, name, login, password }: User): User | null => {
  const index = users.findIndex((item) => item.id === id);
  const user = users[index];
  if (index === -1 || !user) {
    return null;
  }

  user.name = name;
  user.login = login;
  user.password = password;

  return { ...user };
};

export default { getAll, postUser, getUserById, deleteUser, putUser };
