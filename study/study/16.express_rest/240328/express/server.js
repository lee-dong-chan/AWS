const express = require("express");
const path = require("path");
// const http = require("http");
const app = express(); // net.createServer()<<
// const server = http.createServer((req, res) => {
//   res.end("now testion http createserver");
// });
const boardRoot = path.join(__dirname, "..", "board");

//Middelware

app.use((req, res, next) => {
  //get post put patch delete <<RestApi  method모두 대응
  console.log("miidleware");
  //res.send("이건 어차피 한글됨")// <<express 에서는 이렇게 쓰지 말라고함
  next();
});

app.get("/", (req, res, next) => {
  console.log("board miidleware");
  next();
});

app.get("/", (req, res) => {
  res.send("이건 어차피 한글됨");
});
app.get("/board", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.html"));
});

app.get("/board.css", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.css"));
});

app.get("/board.js", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.js"));
});

app.get("/test", (req, res, next) => {
  req.test = {};
  next();
});
app.get("/test", (req, res, next) => {
  req.test.a = 1;
  next();
});
app.get("/test", (req, res, next) => {
  req.test.b = "테스트중";
  next();
});
app.get("/test", (req, res, next) => {
  res.json(req.test);
  next();
});

app.all("/*", (req, res) => {
  res.send("구현 사항 없음");
}); //use랑 같은놈 << send,sendFile 등 데이터를 응답하기위해 사용한다

app.listen(3000, () => {
  console.log("express server open of 3000 port");
}); // server.listen(port,ip,callbackFn) <<?
// server.listen(80, () => {
//   console.log("http sercer open of 3080 port");
// });
