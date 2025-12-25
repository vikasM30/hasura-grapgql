const userFields = require("../fragments/userFields");

module.exports = `
  ${userFields}
  
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      ...UserFields
    }
  }
`;
