import { useContext, useEffect, useState } from "react";
import { TodoContext, ITodoContext } from "../../context/todoList";
import { IBoard } from ".";
import List from "../List";
const Comp = (): JSX.Element => {
  const { addList } = useContext(TodoContext) as ITodoContext;

  useEffect(() => {
    addList({
      num: 1,
      content: "오늘점심은",
      priority: 1,
      createdAt: new Date().toLocaleDateString(),
      limit: "2024.6.30",
    });
  }, []);
  return <div></div>;
};

export default Comp;
