const { gql } = require('graphql-tag');

module.exports = gql`
  type User {
    id: ID!
    name: String
    email: String
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }

  type UpdateUserResponse {
  success: Boolean!
  message: String!
  user: User
  }

  enum SearchOp {
    CONTAINS
    STARTS_WITH
    ENDS_WITH
    EQUALS
  }

  enum SearchLogic {
    AND
    OR
  }

  input SearchFilter {
    field: String!
    op: SearchOp!
    value: String!
  }

  extend type Query {
    listUsers: [User]
    getUserById(id: ID!): User
    searchUsers(
    filter: SearchFilter
      filters: [SearchFilter!]
      logic: SearchLogic = OR
    ): [User]
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput): UpdateUserResponse
    deleteUser(id: ID!): Boolean
  }
`;
