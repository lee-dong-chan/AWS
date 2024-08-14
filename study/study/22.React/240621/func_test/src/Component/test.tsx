// import React from "react";

import { FC, useEffect, useState } from "react";

// export default function Test():JSX.Element {

//  return <div>now testimg</div>;
// }
//FC : function Component
const Test: FC = () => {
  const [test, _] = useState<string>("now testing");
  const [text, settext] = useState("asdf");
  useEffect(() => {
    console.log("test Component Mounted");
    return () => {
      console.log("Test Componet will UnMount");
    };
  }, []);
  //return으로 반환하는 method가 componentWillUnmount socket통신
  return <div>{text}</div>;
};

export default Test;
