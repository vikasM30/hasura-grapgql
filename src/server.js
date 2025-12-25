require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');

const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');

// const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const baseSchema = require('./graphql/baseSchema');

async function start() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: [baseSchema, typeDefs],
    resolvers
  });

  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  app.listen(3000, () =>
    console.log('🚀 GraphQL Server running at http://localhost:3000/graphql')
  );
}

start();
