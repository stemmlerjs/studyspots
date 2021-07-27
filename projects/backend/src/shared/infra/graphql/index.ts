import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

class GraphQLServer {
  public instance: ApolloServer;

  constructor () {
    this.instance = new ApolloServer({ typeDefs, resolvers });
  }

  async start () {
    const { url } = await this.instance.listen(3000);
    console.log(`[GraphQL] 🚀  Server ready at ${url}`);
  }

  async stop () {
    await this.instance.stop();
    console.log(`[GraphQL] Server stopped`)
  }
}

const graphQLServer = new GraphQLServer();

graphQLServer.start();

export { graphQLServer }
