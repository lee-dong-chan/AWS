import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://127.0.0.1:5501", "http://127.0.0.1:8080"] },
}); //uri의 host 개념
// path (router) => socket : namespace
// queryString|| cookie || variable(react) => socket : room 백엔드 자체에서만 작동

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

const chat = io.of("chat");
const room = io.of("room");

//app.use('/chat',(req,res)=>{})
chat.on("connection", (client) => {
  console.log("connected chat");
  //chat.js 파일내에서 get post
  client.on("disconnect", () => {
    console.log("client disconnected");
  });
  // client.rooms.clear();
  console.log(client.rooms);
  // //Set(1) { 'YaUlkqfgDgoRzLhRAAAD' }
  // const temp = new Set();
  // console.log(temp);
  // //Set(0) {}
  // temp.add(1);
  // console.log(temp);
  // //Set(1) { 1 }
  // temp.add(2);
  // console.log(temp);
  // //Set(2) { 1, 2 }
  // temp.add(1);
  // console.log(temp);
  // //Set(2) { 1, 2 }
  // console.log(new Set([1, 2, 3, 1, 2, 3, 1, 3]));
  // //Set(3) { 1, 2, 3 }

  // client.rooms.clear();
  // client.join(1);
  // console.log(client.rooms);

  client.on("chat", (data) => {
    let now = [...client.rooms][1];
    if (data.room !== now) {
      // client.rooms.clear();
      client.leave(now);
      client.join(data.room);
      now = data.room;

      client.emit("chat", { name: data.room, chat: "에 입장했습니다." });
      client.broadcast
        .to(now)
        .emit("chat", { name: data.name, chat: "님이 입장을 했습니다" });
    }
    chat.to(now).emit("chat", data);
    client.emit("chat", { name: "나", chat: "채팅을 쳣다" });
    // chat.emit("chat", data); 전체
    // io.to(); // 개인 룸에 보낼 수 있음, 개인 룸은 개인 ID를 기반으로 함
  });
});

io.on("connection", (client) => {
  console.log("client connection");

  client.on("disconnect", () => {
    console.log("client disconnected");
  });
  client.on("chat", (data) => {
    console.log(data);
    io.emit("chat", data);
  });
});

//express 에서 변수를 저장하는 방법
//req.app.get("io") 사용가능
app.set("io", io);

server.listen(8080, () => {
  console.log(8080, "server open");
});
