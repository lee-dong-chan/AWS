import { useTodoContext } from "../context/TodoProvider";
import { useCallback, useMemo } from "react";
interface IProps {
  idx: number;
}

const Item = ({ idx }: IProps): JSX.Element => {
  const {
    state: { todoList },
    dispatch,
  } = useTodoContext();

  const item = useMemo(() => {
    return todoList[idx];
  }, [todoList]);

  const toggleComplate = useCallback(() => {
    dispatch({
      type: "TOGGLETODO",
      payload: { id: item.id },
    });
  }, [todoList]);
  const remove = useCallback(() => {
    dispatch({
      type: "REMOVETODO",
      payload: { id: item.id },
    });
  }, [todoList]);
  return (
    <div className="flex gap-5">
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>{item.isComplete ? "완료" : "진행중"}</div>
      <button onClick={toggleComplate}>완료</button>
      <button onClick={remove}>삭제</button>
    </div>
  );
};

export default Item;
