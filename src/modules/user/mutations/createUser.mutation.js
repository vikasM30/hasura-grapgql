const userFields = require("../fragments/userFields");

module.exports = `
  ${userFields}
  mutation CreateUser($object: users_insert_input!) {
    insert_users_one(object: $object) {
      ...UserFields
    }
  }
`;
