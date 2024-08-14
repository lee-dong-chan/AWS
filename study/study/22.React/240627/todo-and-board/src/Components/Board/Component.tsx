import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { LinkButton } from "../../App";

const BoardComp: FC<{ list: IBoard[] }> = ({ list }) => {
  return (
    <ul>
      <BoardRowTitle
        title={{
          id: "No.",
          title: "제목",
          user: "작성자",
          createdAt: "작성자",
          count: "추천",
        }}
      />
      {list.map((board: IBoard, idx: number) => {
        return (
          <BoardItem
            key={idx}
            board={{ ...board, id: idx + 1 }}
            isEven={idx % 2 == 1}
          />
        );
      })}
      {/* <BoardItem
        board={{
          id: 1,
          title: "성민아 오늘도 편의점이니?",
          user: "이동찬",
          createdAt: new Date(),
          likeCount: 10,
          discount: 20,
        }}
      />
      <BoardItem
        board={{
          id: 1,
          title: "성민아 오늘도 편의점이니?",
          user: "이동찬",
          createdAt: new Date(),
          likeCount: 10,
          discount: 20,
        }}
        isEven={true}
      />
      <BoardItem
        board={{
          id: 1,
          title: "성민아 오늘도 편의점이니?",
          user: "이동찬",
          createdAt: new Date(),
          likeCount: 10,
          discount: 20,
        }}
      />
      <BoardItem
        board={{
          id: 1,
          title: "성민아 오늘도 편의점이니?",
          user: "이동찬",
          createdAt: new Date(),
          likeCount: 10,
          discount: 20,
        }}
        isEven={true}
      /> */}
      {/* <ul>
        <li>
          <ul>
            <li>No.</li>
            <li>제목</li>
            <li>작성자</li>
            <li>작성 날짜</li>
            <li>추천</li>
          </ul>
        </li>
      </ul> */}
      {/* <BoardRow
        board={{
          id: 1,
          title: "성민아 오늘도 편점?",
          user: "정경훈",
          createdAt: new Date(),
          likeCount: 10,
          discount: 20,
        }} */}
      {/* /> */}
    </ul>
  );
};

export interface IBoard {
  id: number;
  title: string;
  user: string;
  createdAt: Date;
  likeCount: number;
  discount: number;
}

const BoardRow: FC<{
  board: { [key: string]: string };
  isTitle?: boolean;
  isEven?: boolean;
}> = ({ board, isTitle = false, isEven = false }) => {
  return (
    <li>
      <ul
        className={`flex border-b border-black ${isEven ? "bg-gray-200" : ""}`}
      >
        <li className="px-2 py-1 w-12 text-cente  border-r border-dotted border-gray-500">
          {board.id}
        </li>
        <li
          className={`px-2 py-1 flex-1 ${
            isTitle ? "text-center" : ""
          } truncate  border-r border-dotted border-gray-500`}
        >
          {board.title}
        </li>
        <li className="px-2 py-1 w-20 text-center  border-r border-dotted border-gray-500">
          {board.user}
        </li>
        {/* <li className="px-2 py-1">{board.createdAt}</li> */}
        <li className="px-2 py-1 w-16 text-center">{board.count}</li>
        <li className="px-2 py-1 w-16 text-center">
          {<LinkButton path="/remove">삭제</LinkButton>}
        </li>
      </ul>
    </li>
  );
};

const BoardRowTitle: FC<{ title: { [key: string]: string } }> = ({ title }) => {
  return <BoardRow board={title} isTitle={true} />;
};

const BoardItem: FC<{ board: IBoard; isEven?: boolean }> = ({
  board,
  isEven = false,
}) => {
  return (
    <BoardRow
      board={{
        id: board.id.toString(),
        title: board.title,
        user: board.user,
        createdAt: board.createdAt.toLocaleDateString(),
        count: (board.likeCount - board.discount).toString(),
      }}
      isEven={isEven}
    />
  );
};

export default BoardComp;
