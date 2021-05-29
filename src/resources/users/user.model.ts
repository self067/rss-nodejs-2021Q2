import { v4 as uuidv4 } from 'uuid';
/**
 * User data model
 * @class
 */
class User {
  /**
   * @constructor
   * @param  {string} id User Id
   * @param  {string} name User name
   * @param  {string} login User login
   * @param  {string} password User password
   */
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * User to response
   * @param  {object} user object
   * @return {object}
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
