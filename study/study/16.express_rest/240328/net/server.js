const express = require("./lib/express");
const path = require("path");
// const http = require("http");
const app = express(); // net.createServer()<<
// const server = http.createServer((req, res) => {
//   res.end("now testion http createserver");
// });
const boardRoot = path.join(__dirname, "..", "board");

app.get("/", (req, res) => {
  res.end("이건 어차피 한글됨");
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

app.listen(3001, () => {
  console.log("express server open of 3001 port");
}); // server.listen(port,ip,callbackFn) <<?
// server.listen(80, () => {
//   console.log("http sercer open of 3080 port");
// });
