import { Hono } from "hono";
import { cors } from "hono/cors";
import { type RootResolver, graphqlServer } from "@hono/graphql-server";
import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
      id: ID!
      name: String!
    }
  
    type Query {
      users: [User!]!
    }
  `);

const rootResolver: RootResolver = (c) => {
  return {
    users: () => {
      return [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Doe" },
      ];
    },
  };
};

const app = new Hono();

// CORSミドルウェアを追加
app.use(
  "/*",
  cors({
    origin: (origin) => {
      // localhostからのリクエストを許可
      return origin?.includes("localhost") ? origin : null;
    },
    credentials: true, // クッキーなどの認証情報を許可する場合
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
  }),
);

app.use(
  "/graphql",
  graphqlServer({
    schema,
    rootResolver,
    graphiql: true, // if `true`, presents GraphiQL when the GraphQL endpoint is loaded in a browser.
  }),
);

app.get("/", (c) => {
  return c.json({
    message: "Hello Hono🔥",
  });
});

export default app;
