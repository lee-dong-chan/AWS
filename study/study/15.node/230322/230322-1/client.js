//브라우저의 일을 대신한다.
const net = require("net");

const socket = net.connect({ port: 3000, host: "127.0.0.1" });

socket.on("connect", () => {
  console.log("서버랑 연결됫어");
  const now = new Date().toLocaleString();

  socket.write("시작 :" + now);
});

socket.on("data", (data) => {
  console.log(data.toString() + "에 응답 받았어");
  setTimeout(() => {
    const now = new Date().toLocaleString();
    socket.write(now);
  }, 1000);
  //   socket.end();
});
