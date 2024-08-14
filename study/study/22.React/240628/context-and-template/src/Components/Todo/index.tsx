import { useContext, useEffect, useMemo, useState } from "react";
import List, { ITitle } from "../List";
import { ITodo, ITodoContext, TodoContext } from "../../context/todoList";
// interface ITodo {
//   num: number;
//   content: string;
//   priority: number;
//   createdAt: string;
//   limit: string;
// }
const Todo = (): JSX.Element => {
  // const [list, setList] = useState<ITodo[]>([
  //   {
  //     num: 1,
  //     content: "오늘점심은",
  //     priority: 1,
  //     createdAt: new Date().toLocaleDateString(),
  //     limit: "2024.6.30",
  //   },
  // ]);
  const { list } = useContext(TodoContext) as ITodoContext;
  const titleList: ITitle<ITodo>[] = useMemo(
    () => [
      { key: "num" as keyof ITodo, name: "No." },
      { key: "content" as keyof ITodo, name: "할일", isStrech: true },
      { key: "limit" as keyof ITodo, name: "기간제한" },
    ],
    []
  );
  // useEffect(() => {
  //   addList({
  //     num: 1,
  //     content: "오늘점심은",
  //     priority: 1,
  //     createdAt: new Date().toLocaleDateString(),
  //     limit: "2024.6.30",
  //   });
  // }, []);
  return <div>{<List list={list} titleList={titleList} />}</div>;
};

export default Todo;
