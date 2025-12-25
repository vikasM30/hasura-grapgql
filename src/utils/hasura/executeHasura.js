const hasuraClient = require('../../config/hasuraClient');

async function executeHasura(query, variables = {}) {
  const res = await hasuraClient.post('', { query, variables });

  if (res.data.errors) {
    throw new Error(res.data.errors[0].message);
  }

  return res.data.data;
}

module.exports = { executeHasura };
