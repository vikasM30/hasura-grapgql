module.exports = `
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
`;