const { executeHasura } = require('../../utils/hasura/executeHasura');
const getOrdersQuery = require('./queries/getOrdersByUser.query');
const createOrderMutation = require('./mutations/createOrder.mutation');

class OrderService {
  static getOrdersByUser(userId) {
    return executeHasura(getOrdersQuery, { userId })
      .then(d => d.orders);
  }

  static createOrder(input) {
    return executeHasura(createOrderMutation, { object: input })
      .then(d => d.insert_orders_one);
  }
}

module.exports = OrderService;
