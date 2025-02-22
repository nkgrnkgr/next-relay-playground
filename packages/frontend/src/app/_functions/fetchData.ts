export type Data = {
  message: string;
};

export const fetchData = async () => {
  const res = await fetch("http://localhost:8787", {
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data as Data;
};
