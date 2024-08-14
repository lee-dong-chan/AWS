import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//recoil은 context를 쉽게 사용할수 있게 해주는 라이브러리
//같은 종류로는 Redux,MobX 같은 라이브러리가 있다.
//4년 전쯤 Redux 필수
//요즘은 Recoil도 요즘은 지양 => 왜? 전역상태 자체를 지향
// 회사에서 사용할 가능성 ==> 알아두어야 한다.
import { RecoilRoot } from "recoil"; //Store 역활

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <RecoilRoot>
      {/*Store세팅*/}

      <App />
    </RecoilRoot>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
