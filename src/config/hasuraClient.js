const axios = require('axios');

module.exports = axios.create({
  baseURL: process.env.HASURA_GRAPHQL_ENDPOINT,
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
  }
});