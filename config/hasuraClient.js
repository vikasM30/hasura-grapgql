const axios = require('axios');

const hasuraClient = axios.create({
  baseURL: process.env.HASURA_GRAPHQL_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    'content-type': 'application/json',
  },
});

module.exports = hasuraClient;
