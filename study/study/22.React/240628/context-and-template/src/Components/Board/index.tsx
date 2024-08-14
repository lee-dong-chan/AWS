import { useContext, useState, useEffect } from "react";
import List, { ITitle } from "../List";
import { ITodoContext, TodoContext } from "../../context/todoList";
import Comp from "./Comp";

export interface IBoard {
  title: string;
  num: number;
  user: string;
  createdAt: string;
}

const Board = (): JSX.Element => {
  // const { addList } = useContext(TodoContext) as ITodoContext;

  // useEffect(() => {
  //   addList({
  //     num: 1,
  //     content: "오늘점심은",
  //     priority: 1,
  //     createdAt: new Date().toLocaleDateString(),
  //     limit: "2024.6.30",
  //   });
  // }, []);

  return (
    <div>
      <Comp />
    </div>
  );
};

export default Board;
