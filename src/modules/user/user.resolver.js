const UserService = require('./user.service');

module.exports = {
  Query: {
    listUsers: () => UserService.listUsers(),
    getUserById: (_, args) => UserService.getUserById(args.id),
    searchUsers: (_, { filter, filters, logic }) => {
      const finalFilters = filter ? [filter] : filters || [];
      return UserService.searchUsers({ filters: finalFilters, logic });
    },
  },
  Mutation: {
    createUser: (_, { input }) => UserService.createUser({ input }),
    updateUser: (_, { id, input }) => UserService.updateUser({ id, input }),
    deleteUser: (_, { id }) => UserService.deleteUser(id),
  },
};
