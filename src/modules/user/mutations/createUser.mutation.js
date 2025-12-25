module.exports = `
  mutation CreateUser($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
      name
      email
    }
  }
`;
