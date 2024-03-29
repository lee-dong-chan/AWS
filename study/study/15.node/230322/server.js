const net = require("net");
const { makeReq } = require("./lib/req");
const { makeResponse, redirect } = require("./lib/res");

// const CONTRY = ["대한민국", "미국", "일본", "중국"];
// const CITY = [
//   ["경기도", "서울", "강원도", "인천"],
//   ["뉴욕", "LA", []],
// ];

// const user = {
//   id: "",
//   pw: "",
//   name: "",
//   job: "",
//   age: 0,
//   adress: {
//     contry: CONTRY[0],
//     city: CITY[this.country][0],
//     road: "",
//     roadCount: 0,
//     bildName: "",
//     floor: 0,
//     roomCount: 0,
//   },
// };
const html = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <form action="http://localhost:3000" method="post">
    <fieldset>
      <legend>Sword Art Online</legend>
      <input type="text" name="id" placeholder="ID" />
      <input type="password" name="pw" placeholder="PW" />
      <button>Link Start</button>
      <button type="reset">Reset</button>
    </fieldset>
  </form>
  <ul id="users"></ul>
  <script>
    const getUsers = async () => {
      try {
        const usersRes = await fetch("http://localhost:3000/list", {
          mode: "no-cors",
        });
        const usersData = await usersRes.text();
        const userArr = JSON.parse(usersData);
        //const userArr= Json.parse()
        console.log(userArr);
        const usersElem = document.getElementById('users') 
        userArr.forEach(item=>{
            usersElem.innerHTML+= "<li>" + item.id + "</li>"
        })
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  </script>
</body>
</html>
`;
const users = [];
const getMessage = ({ header: { method, path }, body }) => {
  if (method == "GET") {
    if (path == "/") message = makeResponse("text/html", html);
    else if (path == "/list")
      message = makeResponse("application/json", JSON.stringify(users));
  } else if (method == "post") {
    if (path == "/") {
      users.push(body);
      message = redirect();
    }
  }
  return message;
};
const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    console.log(req);
    client.write(getMessage(req));
    // client.write(makeResponse("application/json", JSON.stringify(users)));
    client.end();
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000port");
});
