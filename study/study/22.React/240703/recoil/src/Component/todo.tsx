import { useEffect } from "react";
import Add from "../page/add/add";
import List from "../page/list/list";
import { Route, Routes } from "react-router-dom";
import { useSetRecoilState, useRecoilValue, selector } from "recoil";
import { todoListState, getSeverList, ITodo } from "../context/todo";

const Todo = (): JSX.Element => {
  const setList = useSetRecoilState(todoListState);
  const getServer = useRecoilValue(getSeverList);

  useEffect(() => {
    setList(getServer);
  }, [getServer]);

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/Add" element={<Add />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Todo;
