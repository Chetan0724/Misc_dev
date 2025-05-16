import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Graphql instance
const server = new ApolloServer({
    // Scalar Types - String, Boolean, Int, Float, ID
    typeDefs: `#graphql
    type Post {
        id: ID!
        title: String!
        body: String!
        tags: [String]
    }

    type Query {
        posts: [Post]
    }
    `,
    resolvers: {
        Query: {
            posts: () => [
                {
                    id: "1",
                    title: "Post 1",
                    body: "Body of post 1",
                    tags: ["tag1", "tag2"],
                },
                {
                    id: "",
                    title: "Post 2",
                    body: "Body of post 2",
                    tags: ["tag3", "tag4"],

                }
            ]
        },
    },
});

// Asynchronous operation that's why we are now providing the await keyword.
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server ready at: ${url}`);