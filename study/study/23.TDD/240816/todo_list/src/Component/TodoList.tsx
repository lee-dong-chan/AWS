import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getList, Todo as ITodo, addTodo } from "../lib/todoAxios";

const TodoList = (): JSX.Element => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["get", "/todo"],
    queryFn: getList,
  });

  const [todo, settodo] = useState<string>("");

  const QueryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation({
    mutationFn: async () => {
      await addTodo({ title: todo });
    },
  });

  const value = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    settodo(e.target.value);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      QueryClient.invalidateQueries({ queryKey: ["get", "/todo"] });
      settodo("");
    }
  }, [isSuccess]);

  if (isLoading) return <div>now Loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={todo} onChange={value}></input>
        <button
          onClick={() => {
            mutate();
          }}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {data?.map((item: ITodo, idx: number) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
