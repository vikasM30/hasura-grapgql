const { executeHasura } = require('../../utils/executeHasura');
const getUserQuery = require('./queries/getUserById.query');
const createUserMutation = require('./mutations/createUser.mutation');

class UserService {
  static getUserById(id) {
    return executeHasura(getUserQuery, { id })
      .then(d => d.users_by_pk);
  }

  static createUser(input) {
    return executeHasura(createUserMutation, { object: input })
      .then(d => d.insert_users_one);
  }
}

module.exports = UserService;
