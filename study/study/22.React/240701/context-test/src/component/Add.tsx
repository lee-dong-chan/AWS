import { ChangeEvent, useCallback, useState } from "react";
import { useTodoContext } from "../context/TodoProvider";
import { Todo } from "../context/TodoProvider";

const Add = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);
  const changeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);
  const changeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const temp = +e.target.value;
    if (!isNaN(temp)) setId(temp);
  }, []);
  const { dispatch } = useTodoContext();
  const addTodo = () => {
    dispatch({
      type: "ADDTODO",
      payload: { title, content },
    });
  };
  return (
    <div>
      <div className="flex">
        <div>
          id:
          <input className="border" type="number" onInput={changeId}></input>
        </div>
        <div>
          Title:
          <input
            className="border"
            type="text"
            value={title}
            onInput={changeTitle}
          ></input>
        </div>
        <div>
          content:
          <input
            className="border"
            type="text"
            value={content}
            onInput={changeContent}
          ></input>
        </div>
        <button className="btn" onClick={addTodo}>
          추가
        </button>
      </div>
    </div>
  );
};

export default Add;
