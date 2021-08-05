
import { resolvers } from './resolvers';
import { GraphQLServer } from './server';
import { typeDefs } from './typeDefs';

const graphQLServer = new GraphQLServer(typeDefs, resolvers);

graphQLServer.start();

export { graphQLServer };
