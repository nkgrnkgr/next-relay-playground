"use client";

import { gql, useQuery } from "@apollo/client";

type User = {
  id: string;
  name: string;
};

type UsersData = {
  users: User[];
};

const GET_USERS = gql`
 query GetUsers {
    users {
        id
        name
    }
 }
`;

export const ApolloPlayground = () => {
  const { data, loading, error } = useQuery<UsersData>(GET_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Apollo Playground</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
