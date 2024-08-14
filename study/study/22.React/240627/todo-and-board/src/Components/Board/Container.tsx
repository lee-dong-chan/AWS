import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BoardComp, { IBoard } from "./Component";

const Board: FC = () => {
  const [list, setList] = useState<IBoard[]>([
    {
      id: 1,
      title: "성민아 오늘도 편의점이니?",
      user: "이동찬",
      createdAt: new Date(),
      likeCount: 10,
      discount: 20,
    },
    {
      id: 1,
      title: "성민아 오늘도 편의점이니?",
      user: "이동찬",
      createdAt: new Date(),
      likeCount: 10,
      discount: 20,
    },
    {
      id: 1,
      title: "성민아 오늘도 편의점이니?",
      user: "이동찬",
      createdAt: new Date(),
      likeCount: 10,
      discount: 20,
    },
  ]);
  return (
    <div>
      <BoardComp list={list} />
    </div>
  );
};

export default Board;
