import { use } from "react";
import { Playground } from "./_components/playground";
import { fetchData } from "./_functions/fetchData";

export default function Home() {
  const data = use(fetchData());
  return (
    <div>
      <h1>Home</h1>
      <Playground data={data} />
    </div>
  );
}
