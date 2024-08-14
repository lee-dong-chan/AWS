import { FC } from "react";
import Add from "./Add";
import Comp from "./Comp";
import useTodoList from "../hooks/TodoList";

const Todo: FC = () => {
  const { list, addTodo, removeTodo, completeTodo } = useTodoList();
  return (
    <div>
      <Add addTodo={addTodo} />
      <Comp list={list} removeTodo={removeTodo} completeTodo={completeTodo} />
    </div>
  );
};

export default Todo;
