import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Graphql instance
const server = new ApolloServer({
  // Scalar Types - String, Boolean, Int, Float, ID
  typeDefs: `#graphql
    type Query {
    hello: String
    }
    `,
  resolvers: {
    Query: {
      hello: () => "Hello world!",
    },
  },
});

// Asynchronous operation that's why we are now providing the await keyword.
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server ready at: ${url}`);
