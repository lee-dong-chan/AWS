const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));

const urlencodedOptions = { extended: false };

app.use(express.urlencoded(urlencodedOptions));
app.use(express.json());
// app.use(express.static);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("views"));

const boards = [
  { id: 1, title: "오늘도 도시락", writer: "이정배", createdAt: "2024-04-03" },
  { id: 2, title: "편의점 ㄱ", writer: "이승배", createdAt: "2024-04-03" },
];

app.get("/", (req, res) => {
  //res.end()
  //res.send()
  //res.sendFile()
  //res.json()
  res.render("index", {
    title: "오늘의 점심",
    name: "김강문",
    elem: "<div style='color: red'>제육복음</div>",
    boards,
  });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "serveropen");
});
