const OrderService = require('./order.service');

module.exports = {
  Query: {
    ordersByUser: (_, { userId }) => OrderService.getOrdersByUser(userId)
  },
  Mutation: {
    createOrder: (_, { input }) => OrderService.createOrder(input)
  }
};
