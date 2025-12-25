module.exports = `
  query ($userId: uuid!) {
    orders(where: { user_id: { _eq: $userId } }) {
      id
      product
      price
    }
  }
`;
