import { useCallback, useState } from "react";
import { useTodoContext } from "./context/TodoProvider";
import { Todo } from "./context/TodoProvider";
import Add from "./component/Add";
import List from "./component/list";
const App = (): JSX.Element => {
  // const [list, setList]: [
  //   string[],
  //   React.Dispatch<React.SetStateAction<string[]>>
  // ] = useState<string[]>([]);
  // const { state, dispatch } = useTodoContext();
  // console.log(state);

  // const addTodo = useCallback(() => {
  //   dispatch({
  //     type: "ADDTODO",
  //     payload: { id: 1, content: "testing", isComplete: false },
  //   });
  // }, []);

  return (
    <div>
      <Add />
      <List />
    </div>
  );
};
// state는 component 내부의 store에 저장
// store --> view --> setState --> store
// setSate --> Dispatch<action> setState에 대한 action을 dispatch에 전달--> Reducer --> store
// 정리 store --> view --> dispatch(action) --> reducer --> store

// action 어떤 행동을 할지 --> Dispatch Action을 Reducer로 전달 -->전달받은 Action을 Reducer가 실행

export default App;
