const router = require("express").Router();
const session = require("express-session");
const FileStore = require("session-file-store")(session);

router.use(
  session({
    resave: true, //true 시간연장 false 세션을 다시생성
    saveUninitialized: true, //
    secret: "test",
    name: "user-session", //connect.sid
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

router.get("/userset", (req, res) => {
  req.session.user = 2;
  console.log(req.session.id);
  res.send("setting session");
});

router.get("/userget", (req, res) => {
  res.send({ user: req.session.user });
});
1;
module.exports = router;

//ORM
