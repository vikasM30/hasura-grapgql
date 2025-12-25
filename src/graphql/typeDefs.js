const { gql } = require('graphql-tag');

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Order {
    id: ID!
    product: String!
    price: Int!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input CreateOrderInput {
    user_id: ID!
    product: String!
    price: Int!
  }

  type Query {
    user(id: ID!): User
    ordersByUser(userId: ID!): [Order]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    createOrder(input: CreateOrderInput!): Order
  }
`;
