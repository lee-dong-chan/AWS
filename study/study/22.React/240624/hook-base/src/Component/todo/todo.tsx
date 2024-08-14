import { FC } from "react";
import List from "./List";
import { Todo as TodoItem } from "../../lid/todo";
import Add from "../../Containers/todo/Add";
export interface ITodoProps {
  list: TodoItem[];
  complete(idx: number): void;
  removeItem(idx: number): void;
}

export interface IProps extends ITodoProps {
  addItem(content: string, priority: number, limit: string): void;
}

const Todo: FC<IProps> = ({ list, complete, removeItem, addItem }) => {
  return (
    <div>
      <List list={list} complete={complete} removeItem={removeItem} />
      <Add addItem={addItem} />
    </div>
  );
};

export default Todo;

//component HTML
