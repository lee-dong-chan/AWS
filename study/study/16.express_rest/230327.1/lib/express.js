const net = require("net");
const fs = require("fs");

const { makeReq } = require("./req");
const { makeResponse } = require("./res");

const createRes = (client) => ({
  end: (data) => {
    client.write(makeResponse("text/html", data));
    client.end();
  },
});

const app = {
  funcList: [],
  add: (method, path, func) => {
    app.funcList.push({ method, path, func });
  },
  execList: (req, res) => {
    let isRun = false;
    const { method, path } = req.header;
    app.funcList.forEach((item) => {
      if (method != item.method) return;
      if (path != item.path) return;
      callback.func(req, res);
      isRun = true;
    });
    return isRun;
  },
  get: (path, func) => {
    app.add("GET", path, func);
  },
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    const res = createRes(client);

    if (!app.execList(req, res)) res.end("error");

    // if (req.header.method == "GET" && req.header.path == "/") {
    //   res.end("now testing net server");
    // } else if (req.header.method == "GET" && req.header.path == "/test") {
    //   res.end("now testing net server");
    // } else {
    //   res.end("error");
    // }

    // res.end("now testing net server");

    // client, write("now testing net server");
    // client.end();
  });
});
// app.get("/", (req, res) => {
//   res.end("now testing net server");
// });
// client.write(getMessage(req));

// server.listen(3001, "127.0.0.1", () => {
//   console.log("server open of 3001 port");
// });
app.listen = (port, func) => {
  server.listen(port, "127.0.0.1", func);
};
module.exports = () => {
  return app;
};
