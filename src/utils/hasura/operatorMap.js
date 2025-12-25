module.exports = {
  CONTAINS: (v) => ({ _ilike: `%${v}%` }),
  STARTS_WITH: (v) => ({ _ilike: `${v}%` }),
  ENDS_WITH: (v) => ({ _ilike: `%${v}` }),
  EQUALS: (v) => ({ _eq: v })
};
