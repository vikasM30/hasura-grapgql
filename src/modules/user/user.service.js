const hasuraClient = require('../../config/hasuraClient');
const getUserByIdQuery = require('./queries/getUserById.query');
const createUserMutation = require('./mutations/createUser.mutation');

class UserService {
  static async getUserById(id) {
    const response = await hasuraClient.post('', {
      query: getUserByIdQuery,
      variables: { id },
    });

    return response.data.data.users_by_pk;
  }

  static async createUser(userData) {
    const response = await hasuraClient.post('', {
      query: createUserMutation,
      variables: {
        object: userData,
      },
    });

    return response.data.data.insert_users_one;
  }
}

module.exports = UserService;
