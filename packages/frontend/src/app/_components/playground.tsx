"use client";

import { use, useState } from "react";

const fetchData = async () => {
  const res = await fetch("http://localhost:8787", {
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data as { message: string };
};

export const Playground = () => {
  const data = use(fetchData());
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Playground</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
};
