// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  // サーバーサイドレンダリング時はssrModeをtrueに
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // .env.localに設定例: NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-graphql-endpoint.com/graphql
    // Next.jsではグローバルのfetchが利用可能です
  }),
  cache: new InMemoryCache(),
});

export default client;
