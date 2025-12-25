const { gql } = require('graphql-tag');
const baseUserTypeDefs = require('./baseUser.typeDefs');
const searUserTypeDefs = require('./searUser.typeDefs');
const user_responseTypeDefs = require('./user_response.typeDefs');

module.exports = gql`

  ${baseUserTypeDefs}
  ${searUserTypeDefs}
  ${user_responseTypeDefs}

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
