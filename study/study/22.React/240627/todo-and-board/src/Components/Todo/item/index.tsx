import { FC, useMemo } from "react";
import { Todo } from "../../../hooks/TodoList";
import Comp from "./Comp";

export interface IProps {
  todo: Todo;
  idx: number;
  removeTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
}

const Item: FC<IProps> = ({ todo, removeTodo, completeTodo, idx }) => {
  const createdAt = useMemo(
    () => todo.createdAt.slice(2).replace(/-/g, ""),
    []
  );
  const limit = useMemo(() => todo.limit + "까지", []);

  return (
    <Comp
      idx={idx}
      todo={{ ...todo, createdAt, limit }}
      removeTodo={() => removeTodo(todo)}
      completeTodo={() => completeTodo(todo)}
    />
  );
};

export default Item;
