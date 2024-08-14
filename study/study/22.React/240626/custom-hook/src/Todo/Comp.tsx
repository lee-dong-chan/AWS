import { Todo as ITodo } from "../hooks/TodoList";
import { FC } from "react";
import Item from "./item/index";
export interface IProps {
  list: Array<ITodo>;

  removeTodo: (todo: ITodo) => void;
  completeTodo: (todo: ITodo) => void;
}
const Todo: FC<IProps> = ({ list, removeTodo, completeTodo }) => {
  return (
    <div>
      {list.map((item: ITodo, idx: number) => (
        <Item
          key={idx}
          idx={idx}
          todo={item}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default Todo;
