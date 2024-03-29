const fs = require("fs");
const path = require("path");

const filename = path.join(__dirname, "../", "views", "index.html");
console.log(filename);

// const readfile = fs.readFile(filename, "utf8", (err, data) => {
//   console.log(err);
//   console.log(data);
// }); // 비동기 방식 ---> promise, async(await)         파일을 읽어온후에 작동 아래코드가 먼저 작동
// console.log("readfile");

const data = fs.readFileSync(filename);
// const data = fs.readFileSync(filename, { encoding: "utf8" });
console.log(data.toString());
