import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import Test from "./Component/test";

// componentDidMount
// componentDidUpdate
// ComponentWillUnmount

//useEffect

function App(): JSX.Element {
  const [test, setTest]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
    //Dispath:액션을 실행하는 매서드 타립
    //SetstateAction:State의 상태값을 업데이트 하는 액션의 매서드 타입
  ] = useState<boolean>(true); // 재할당 x
  //useState => hook class에서의 기능을 대체
  //use***8 => 함수형 컴포넌트에서 사용하는 훅
  // console.log(test);
  // let test1 = "test"; // 코드가 돌때마다 재할당
  // console.log(test1);

  const [test1, setTest1] = useState<string>("");

  //componentDidMount
  //componentDidupdate
  // 항상 실행된다  render 돌릴떄마다 사용x
  useEffect(() => {
    console.log("useEffect");
  });

  //componentDidMount
  useEffect(() => {
    console.log("Mount");
  }, []);

  //componentDidMount
  //componentDidupdate
  useEffect(() => {
    console.log("testing1");
    return () => {
      console.log("testing?");
    };
  }, [test1]);

  //2번째 인자인 state[]이 변경되었을때 실행된다.
  return (
    <div className="container mx-auto">
      <div
        className="border"
        onClick={() => {
          setTest(!test); //-> set 통하여 state 변경
          // //test=!test;  작동 x
          // test1 = "test1";
        }}
      >
        test
      </div>
      {test && <Test></Test>}
      <input
        type="text"
        value={test1}
        onInput={(e: ChangeEvent<HTMLInputElement>) => setTest1(e.target.value)}
      ></input>
    </div>
  );
}

export default App;
