const express = require("express");
// const http = require("http");
const app = express(); // net.createServer()<<
// const server = http.createServer((req, res) => {
//   res.end("now testion http createserver");
// });

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url); //path
  console.log(req.path);
  console.log(req.query.id); // Querystring
  console.log(req.body);
  console.log(req.protocol);
  res.end("now testing express server");
});
app.get("/test", (req, res) => {
  res.end("now testing express server");
});
app.listen(3000, () => {
  console.log("express server open of 3000 port");
}); // server.listen(port,ip,callbackFn) <<?
// server.listen(80, () => {
//   console.log("http sercer open of 3080 port");
// });
