
import { ApolloServer } from "apollo-server";

export class GraphQLServer {
  public instance: ApolloServer;

  constructor (typeDefs: any, resolvers: any) {
    this.instance = new ApolloServer({ 
      typeDefs, 
      resolvers 
    });
  }

  async start() {
    const { url } = await this.instance.listen(3000);
    console.log(`[GraphQL] 🚀  Server ready at ${url}`);
  }

  async stop() {
    await this.instance.stop();
    console.log(`[GraphQL] Server stopped`);
  }
}
