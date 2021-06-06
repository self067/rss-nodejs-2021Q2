/**
 * Users data
 * @namespace Users/Service
 */

/**
 * Users data repository
 * @memberof Users/Service
 */
import usersRepo from "./user.memory.repository";
import User from "./user.model";

/**
 * Get all Users
 * @memberof Users/Service
 * @return {User[]}
 */
const getAll = (): User[] => usersRepo.getAll(),

/**
 * Get User by Id
 * @memberof Users/Service
 * @param  {string} id User id
 * @returns {User|undefined}
 */
    getUserById = (id: string): User | undefined => usersRepo.getUserById(id),

/**
 * Create user
 * @memberof Users/Service
 * @param  {User} user  User object {name,login, password}
 * @returns {User}
 */
    postUser = (user: User): User => usersRepo.postUser(user),

/**
 * Update user
 * @memberof User/Service
 * @param {User} user board
 * @returns {User}
 */
    putUser = (user: User): User | null => usersRepo.putUser(user),

/**
 * Delete user
 * @memberof User/Service
 * @param {string} id User Id
 * @return {boolean}
 */
    deleteUser = (id: string): boolean => usersRepo.deleteUser(id);

export default {getAll,
    getUserById,
    postUser,
    deleteUser,
    putUser};
