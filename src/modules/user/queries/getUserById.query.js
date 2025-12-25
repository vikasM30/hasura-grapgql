module.exports = `
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      email
      created_at
    }
  }
`;
