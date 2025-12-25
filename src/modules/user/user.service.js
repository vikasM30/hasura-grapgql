const { executeHasura } = require('../../utils/executeHasura');

const listUsersQuery = require('./queries/listUsers.query');
const getUserByIdQuery = require('./queries/getUserById.query');
const searchUsersQuery = require('./queries/searchUsers.query');

const createUserMutation = require('./mutations/createUser.mutation');
const updateUserMutation = require('./mutations/updateUser.mutation');
const deleteUserMutation = require('./mutations/deleteUser.mutation');
const { buildWhere } = require('../../utils/hasura/whereBuilder');

module.exports = {
  listUsers: async () => {
    const data = await executeHasura(listUsersQuery);
    return data.users;
  },

  getUserById: async (id) => {
    const data = await executeHasura(getUserByIdQuery, { id });
    return data.users_by_pk;
  },

  searchUsers: async ({ filters, logic }) => {
    if (!filters || filters.length === 0) return [];

    const where = buildWhere({ filters, logic });

    const data = await executeHasura(searchUsersQuery, { where });

    return data.users;
  },

  createUser: async ({ input }) => {
    const data = await executeHasura(createUserMutation, { object: input });
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

  const data = await executeHasura(updateUserMutation, {
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
    await executeHasura(deleteUserMutation, { id });
    return true;
  }
}