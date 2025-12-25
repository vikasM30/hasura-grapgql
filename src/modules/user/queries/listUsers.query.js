module.exports = `
  query ListUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      email
      created_at
    }
  }
`;
