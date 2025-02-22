import { use } from "react";
import { Playground } from "./_components/playground";
import { fetchData } from "./_functions/fetchData";
import { ApolloPlayground } from "./_components/apollo-playground";

export default function Home() {
  const data = use(fetchData());
  return (
    <div>
      <h1>Home</h1>
      <Playground data={data} />
      <ApolloPlayground />
    </div>
  );
}
