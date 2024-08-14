const router = require("express").Router();
const session = require("express-session");
const FileStore = require("session-file-store")(session);

router.use(
  session({
    resave: true, //true 시간연장 false 세션을 다시생성
    saveUninitialized: true, //
    secret: "test",
    name: "board-session", //connect.sid
    // store: new session.MemoryStore(),//기본값
    store: new FileStore({
      reapInterval: 10, // 10초 뒤에 삭제
      path: "./test-session",
    }), //기본값
    cookie: {
      maxAge: 10000,
    },
  })
);

router.get("/boardset", (req, res) => {
  req.session.board = 1;
  console.log(req.session);
  res.send("setting session");
});

router.get("/boardget", (req, res) => {
  res.send({ board: req.session.board });
});

module.exports = router;
