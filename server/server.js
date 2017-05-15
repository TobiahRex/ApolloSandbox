import express from 'express';
import bodyParser from 'body-parser';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import schema from './schema';
import cors from 'cors';

const PORT = 4000;

const server = express();
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
server.use('*', cors({ origin: 'http://localhost:3000' }));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
