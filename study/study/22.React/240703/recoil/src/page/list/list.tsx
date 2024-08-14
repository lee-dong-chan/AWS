import { ButtonHTMLAttributes, FC, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState, selector } from "recoil";
import {
  ITodo,
  todoList,
  todotitle,
  todoListState,
  getSeverList,
} from "../../context/todo";
import { Link } from "react-router-dom";
import axios from "axios";

interface IProps {}

const List: FC<IProps> = () => {
  const lists = useRecoilValue(todoListState); //getter
  const set = useSetRecoilState(todoListState);
  const list = useRecoilValue(todoList); //getter
  const title = useRecoilValue(todotitle);

  const deleteitem = async (e: EventTarget & HTMLButtonElement) => {
    try {
      await axios.post("http://localhost:8000/api/todo/delete", {
        id: e.value,
      });

      set([...lists.filter((item: ITodo) => item.id != +e.value)]);
    } catch (err) {}
  };

  const completeItem = async (e: EventTarget & HTMLButtonElement) => {
    try {
      await axios.post("http://localhost:8000/api/todo/isComplete", {
        id: e.value,
      });
      set([
        ...lists.map((item: ITodo) =>
          item.id !== +e.value
            ? item
            : { ...item, isComplete: !item.isComplete }
        ),
      ]);
    } catch (err) {}
  };

  return (
    <div className="my-5">
      <div className="mx-auto w-[60rem]">
        <div className="p-1 flex justify-between border border-black ">
          <div className="px-3 w-12 border-e border-black">{title.id}</div>
          <div className="flex flex-1 justify-center border-e border-black">
            {title.content}
          </div>
          <div className="px-3 w-22 border-e border-black">
            {title.isComplete}
          </div>
          <div className="px-3">삭제</div>
        </div>
        <div className="border border-black">
          {list.map((item: ITodo, idx: number) => (
            <div className="p-1 flex justify-between " key={idx}>
              <div className="px-3 w-12 border-e border-black">{idx + 1}</div>
              <div className="px-4 flex flex-1  border-e border-black">
                {item.content}
              </div>
              <button
                className="px-3 w-[5rem] border-e border-black"
                value={item.id}
                onClick={(e) => completeItem(e.currentTarget)}
              >
                {item.isComplete ? "완료" : "진행중"}
              </button>
              <button
                className="del px-3 "
                value={item.id}
                onClick={(e) => deleteitem(e.currentTarget)}
              >
                삭제
              </button>
            </div>
          ))}
        </div>

        <Link to={"/Add"}>
          <div className="my-5 px-4 py-2 w-fit border rounded bg-yellow-300 ">
            할일목록 추가
          </div>
        </Link>
      </div>
    </div>
  );
};

export default List;
