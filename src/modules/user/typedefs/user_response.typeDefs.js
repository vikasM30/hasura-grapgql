module.exports = `
  input UserInput {
    name: String
    email: String
  }

  input CreateUserInput {
    data: UserInput!
  }

  input UpdateUserInput {
    data: UserInput
  }

  interface MutationResponse {
    success: Boolean!
    message: String!
  }

  type UpdateUserResponse implements MutationResponse {
    success: Boolean!
    message: String!
    user: User
  }
`;
