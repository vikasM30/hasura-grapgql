const userFields = require("../fragments/userFields");

module.exports = `
  query SearchUsers($where: users_bool_exp!) {
    ${userFields}
    users(where: $where) {
      ...UserFields
    }
  }
`;

