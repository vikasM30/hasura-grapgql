const userFields = require("../fragments/userFields");

module.exports = `
  ${userFields}

  query ListUsers {
    users(order_by: { created_at: desc }) {
      ...UserFields
    }
  }
`;
