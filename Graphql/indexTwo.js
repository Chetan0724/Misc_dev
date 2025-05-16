import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Graphql instance
const server = new ApolloServer({
  // Scalar Types - String, Boolean, Int, Float, ID
  typeDefs: `#graphql
    type Query {
        id: ID!
        name: String
        age: Int
        isActive: Boolean
        height: Float
    }
    `,
  resolvers: {
    Query: {
      id: () => "1",
      name: () => "John Doe",
      age: () => 38,
      isActive: () => true,
      height: () => 3.6,
    },
  },
});

// Asynchronous operation that's why we are now providing the await keyword.
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server ready at: ${url}`);
