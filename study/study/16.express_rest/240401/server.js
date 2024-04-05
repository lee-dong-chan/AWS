const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config(); //-->process env환경에 넣어줌
// console.log(process.env);

const app = express();

app.set("port", process.env.PORT || 3000); //->express
//globla.port = procexx.env.port //-->node.js
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log(req.hostname);
//   next();
// });

body = app.use(express.urlencoded({ extended: false }));
// body parser
// 메서드 호출할 때 객체가 들어간다? << 옵션
// extended : 확장
//   -true|false
// - true : 외부 라이브러리를 사용하여 작동한다. (qs library)
// - false: Express가 갖고있는 body parser로 작동한다(querystring module)
// querystring을 파싱해준다? << form => Content-Type : x-www-form-urlencoded-->form으로 보냇을때 기본설정

app.use(express.json());
//Content-Type : application/json 일때 처리

app.use("/", express.static("views"));
// /==public
//imgs => public/imgs
//imgs/wa4v34va.png => public/imgs/wa4v34va.png =>x
// app.use(express.static("public"))\
app.use("/board", express.static("views"));
//imgs == uploads
// /imgs/wa4v34va.png => upload/wa4v34va.png => 0
// /imgs/wa4v34va.png => upload/wa4v34va.png => x 아래코드 실행]

app.use("/write", express.static("views"));
// app.get("/board", (req, res) => {
//   //   console.log(req.hostname);
//   // res.sendFile(path.join(__dirname, "./public/index.html"));
//   console.log("board폴더는 없다");
//   res.sendFile(path.join(__dirname, "views/index.html"));
// });
// app.post("/", (req, res) => {
//   res.json({ a: 1 });
// });

let boards = [];
let count = 1;
app.post("/", (req, res) => {
  res.send(
    boards.map(({ id, writer, createdAT, title }) => ({
      id,
      writer,
      createdAT,
      title,
    }))
  );
});

app.post("/write", (req, res) => {
  console.log(req.body);
  const date =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDay();
  boards.push({ ...req.body, createdAT: date, id: count++ });
  res.redirect("/");
});

app.post("/board", (req, res) => {
  res.send(
    boards.map(({ writer, createdAT, title, text, id }) => ({
      writer,
      createdAT,
      title,
      text,
      id,
    }))
  );
});
app.listen(app.get("port"), () => {
  console.log(app.get("port") + "포트로 서버를 열었어");
});
console.log(boards);
