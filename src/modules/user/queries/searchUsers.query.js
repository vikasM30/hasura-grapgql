module.exports = `
  query SearchUsers($where: users_bool_exp!) {
    users(where: $where) {
      id
      name
      email
    }
  }
`;

