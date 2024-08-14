const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const router = require("./router");
const app = express();

app.use(cookieParser("test"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//store : 저장공간

// app.use(
//   session(
//     {
//       resave: true, //true 시간연장 false 세션을 다시생성
//       saveUninitialized: true, //
//       secret: "test",
//       name: "user-session", //connect.sid
//       // store: new session.MemoryStore(),//기본값
//       store: new FileStore({
//         reapInterval: 10, // 10초 뒤에 삭제
//         path: "./test-session",
//       }), //기본값
//       cookie: {
//         maxAge: 10000,
//       },
//     },
//   )
// );

app.use(router);

app.listen(3000, () => {
  console.log(3000, "serveropen");
});
