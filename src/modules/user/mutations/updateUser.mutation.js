const userFields = require("../fragments/userFields");

module.exports = `
  ${userFields}

  mutation UpdateUser($id: uuid!, $_set: users_set_input) {
    update_users_by_pk(
      pk_columns: { id: $id }
      _set: $_set
    ) {
      ...UserFields
      }
  }
`;
