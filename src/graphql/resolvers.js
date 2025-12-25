// const userResolver = require('../modules/user/user.resolver');
// const orderResolver = require('../modules/order/order.resolver');

// module.exports = {
//   Query: {
//     ...userResolver.Query,
//     ...orderResolver.Query
//   },
//   Mutation: {
//     ...userResolver.Mutation,
//     ...orderResolver.Mutation
//   }
// };

const user = require('../modules/user');
// const order = require('../modules/order');

module.exports = [
  user.resolvers,
  // order.resolvers
];
