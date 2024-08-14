import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}

const App = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, isError, isPending } = useQuery<ITodo[]>({
    queryKey: "api/todo/1".split("/"),
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/todo/${page}`
      );
      console.log(data);
      return data;
    },

    // refetchInterval: 1000,
    // refetchOnWindowFocus: false,
  });

  // const { data, isError, isPending, mutate } = useMutation({
  //   mutationKey: ["todo", "list"],
  //   mutationFn: async (page: number) => {
  //     const { data } = await axios.get(
  //       `http://localhost:8000/api/todo/${page}`
  //     );
  //     console.log(data);
  //     return data as ITodo[];
  //   },

  // });

  // useEffect(() => {
  //   mutate(page);
  // }, [page]);

  console.log(data);

  // const query = useQuery<ITodo[]>({
  //   queryKey: ["list", "todo"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("http://localhost:8000/api/todo/1");
  //     console.log(data);
  //     return data;
  //   },
  // });

  if (isPending) return <h1>now Loding</h1>;
  if (isError) return <h1>plz retry</h1>;
  return (
    <div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        up
      </button>
      {data?.map((item) => (
        <div>{item.content}</div>
      ))}
    </div>
  );
};

export default App;
