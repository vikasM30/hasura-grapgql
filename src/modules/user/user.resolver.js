const UserService = require('./user.service');

module.exports = {
  Query: {
    user: (_, { id }) => UserService.getUserById(id)
  },
  Mutation: {
    createUser: (_, { input }) => UserService.createUser(input)
  }
};
