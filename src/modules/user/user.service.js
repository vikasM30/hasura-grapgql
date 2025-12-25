const { executeHasura } = require('../../utils/hasura/executeHasura');

const queries = require('./queries');
const mutations = require('./mutations');

const { buildWhere } = require('../../utils/hasura/whereBuilder');

module.exports = {
  listUsers: async () => {
    const data = await executeHasura(queries.listUsers);
    return data.users;
  },

  getUserById: async (id) => {
    const data = await executeHasura(queries.getUserById, { id });
    return data.users_by_pk;
  },

  searchUsers: async ({ filters, logic }) => {
    if (!filters || filters.length === 0) return [];

    const where = buildWhere({ filters, logic });

    const data = await executeHasura(queries.searchUsers, { where });
    return data.users;
  },

  createUser: async ({ input }) => {
    const data = await executeHasura(mutations.createUser, { object: input });
    return data.insert_users_one;
  },

  updateUser: async ({ id, input }) => {
  if (!id) {
    return { success: false, message: 'User id is required', user: null };
  }

  if (!input || Object.keys(input).length === 0) {
    return { success: false, message: 'Nothing to update', user: null };
  }

  // Build update object dynamically
  const updateFields = {};

  if (input.name !== undefined) {
    updateFields.name = input.name;
  }

  if (input.email !== undefined) {
    updateFields.email = input.email;
  }

  if (Object.keys(updateFields).length === 0) {
    return { success: false, message: 'Nothing to update', user: null };
  }

  const data = await executeHasura(mutations.updateUser, {
    id,
    _set: updateFields
  });

    return {
      success: true,
      message: 'User updated successfully',
      user: data.update_users_by_pk
    };
  },

  deleteUser: async (id) => {
    await executeHasura(mutations.deleteUser, { id });
    return true;
  }
}