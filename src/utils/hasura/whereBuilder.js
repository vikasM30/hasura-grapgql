const operatorMap = require('./operatorMap');

const buildWhere = ({ filters, logic = 'OR' }) => {
  const expressions = filters.map(({ field, op, value }) => {
    const operatorFn = operatorMap[op];

    if (!operatorFn) {
      throw new Error(`Unsupported operator: ${op}`);
    }

    return {
      [field]: operatorFn(value)
    };
  });

  return {
    [logic === 'AND' ? '_and' : '_or']: expressions
  };
};

module.exports = { buildWhere };
