module.exports = `
  query ($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      email
    }
  }
`;
