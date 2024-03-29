const net = require("net");
const fs = require("fs");

const { makeReq } = require("./lib/req");
const { makeResponse, redirect, sendFile } = require("./lib/res");
const static = require("./lib/static");

const users = [
  //0 <= index
  //4
  //  (page-1)*4 <= index< page*4(page ==1)

  { id: "test1", pw: "test1", name: "test1" }, //0
  { id: "test2", pw: "test2", name: "test2" }, //1 //1페이지
  { id: "test3", pw: "test3", name: "test3" }, //2
  { id: "test4", pw: "test4", name: "test4" }, //3
  //  (page-1)*4 <= index< page*4(page ==2)

  { id: "test5", pw: "test5", name: "test5" }, //4
  { id: "test6", pw: "test6", name: "test6" }, //5 //2페이지
  { id: "test7", pw: "test7", name: "test7" }, //6
  { id: "test8", pw: "test8", name: "test8" }, //7

  { id: "test9", pw: "test9", name: "test9" },
  { id: "test10", pw: "test10", name: "test10" },
  { id: "test11", pw: "test11", name: "test11" }, //3페이지
  { id: "test12", pw: "test12", name: "test12" },

  { id: "test13", pw: "test13", name: "test13" },
  { id: "test14", pw: "test14", name: "test14" },
  { id: "test15", pw: "test15", name: "test15" }, //4페이지
  { id: "test16", pw: "test16", name: "test16" },

  { id: "test17", pw: "test17", name: "test17" },
];

const getMessage = ({ header: { method, path }, body }) => {
  let message = "";

  if (method == "GET") {
    if (static[path] != undefined) {
      const body = fs.readFileSync(static[path]);
      if (static[path].indexOf(".js") > -1) {
        message = makeResponse("text/javascript", body.toString());
      } else if (static[path].indexOf(".css") > -1) {
        message = makeResponse("text/css", body.toString());
      } else if (static[path].indexOf(".png") > -1) {
        message = sendFile("image/png", body);
      } else if (static[path].indexOf(".jpg") > -1) {
        message = sendFile("image/jpeg", body);
      } else {
        message = makeResponse("text/html", body.toString());
      }
    }
  } else if (method == "POST") {
    if (path == "/") {
      console.log(body.page);
      //http://localhost:3000/ posr
      //post /Http/1.1
      message = makeResponse(
        "application/json",
        JSON.stringify(
          users
            .slice((body.page - 1) * body.count, body.page * body.count)
            .map((item, idx) => ({ id: item.id, idx }))
        )
      );
    } else if (path == "/write") {
      users.push(body);

      message = redirect();
    }
  }
  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    client.write(getMessage(req));
    client.end();
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
