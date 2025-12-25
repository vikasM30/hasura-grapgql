module.exports = `
  mutation ($object: orders_insert_input!) {
    insert_orders_one(object: $object) {
      id
      product
      price
    }
  }
`;
