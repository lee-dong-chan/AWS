import { ChangeEvent, useCallback, useState } from "react";

const TodoList = (): JSX.Element => {
  const [todo, settodo] = useState<string>("");
  const [list, setlist] = useState<string[]>([]);

  const value = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    settodo(e.target.value);
  }, []);

  const submit = useCallback(() => {
    setlist([...list, todo]);
    settodo("");
  }, [todo]);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={todo} onChange={value}></input>
        <button onClick={submit}>Add Todo</button>
      </div>
      <ul>
        {list.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
