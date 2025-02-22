"use client";

import { use, useState } from "react";
import type { Data } from "../_functions/fetchData";

export const Playground = ({ data }: { data: Data }) => {
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
