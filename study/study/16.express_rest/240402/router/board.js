const router = require("express").Router();
const fs = require("fs");
const path = require("path");

let boards = [
  {
    id: 1,
    title: "오늘 점심은 뭐지?",
    writer: "이동찬",
    createdAt: "2024-04-02",
    view: 1,
  },
  {
    id: 2,
    title: "오늘 저녁은 뭐지?",
    writer: "이동찬",
    createdAt: "2024-04-02",
    view: 2,
  },
  {
    id: 3,
    title: "오늘 간식은 뭐지?",
    writer: "방지환",
    createdAt: "2024-04-02",
    view: 2,
  },
  {
    id: 4,
    title: "오늘 숙제은 뭐지?",
    writer: "이동찬",
    createdAt: "2024-04-02",
    view: 3,
  },
  {
    id: 4,
    title: "오늘 운동은 뭐지?",
    writer: "방지환",
    createdAt: "2024-04-02",
    view: 4,
  },
];
router.get("/", (req, res) => {
  const boardHtmlpath = path.join(__dirname, "..", "views", "boards.html");
  const html = fs.readFileSync(boardHtmlpath, { encoding: "utf8" });

  const boardTemplatepath = path.join(
    __dirname,
    "..",
    "views",
    "boarditemTemplate.html"
  );
  const boardTemplate = fs.readFileSync(boardTemplatepath, {
    encoding: "utf8",
  });

  let tempstr = ` `;
  const objNames = ["id", "title", "writer", "createdAt", "view"];
  //const names = Object.keys(boards[0])<< 알아서 찾아볼것

  boards.forEach((item) => {
    let itemStr = boardTemplate;
    objNames.forEach((name) => {
      itemStr = itemStr.replaceAll(`{{${name}}}`, item[name]);
    });

    tempstr += itemStr;
  });
  tempstr = html.replace("{{list}}", tempstr);
  res.send(tempstr);
});

router.post("/", (req, res) => {
  console.log("board 정보 필요");
  res.redirect("/");
});

router.post("/like", (req, res) => {
  console.log(req.body.like);
  res.redirect("/");
});

// app.post("/board",(req,res)=>{})
// app.post("/board/write",(req,res)=>{})
// app.post("/board/update",(req,res)=>{})
// app.post("/board/delete",(req,res)=>{})
// app.post("/board/comment",(req,res)=>{})
// app.post("/board/comment",(req,res)=>{})
// app.post("/boardcomment",(req,res)=>{})

module.exports = router;
