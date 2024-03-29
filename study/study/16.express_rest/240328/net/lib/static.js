const fs = require("fs");
const path = require("path");

const staticObj = {};

// path: /Users/idongchan/Desktop/AWS/study/study/15.node/230325/views/index.html
// url :/index.html
const rootPath = path.join(__dirname, "../", "views");

const find = (currPath) => {
  const directory = fs.readdirSync(currPath);

  directory.forEach((currPathName) => {
    const findPath = path.join(currPath, currPathName);

    const isFile = fs.statSync(findPath).isFile();

    if (isFile) {
      // staticObj[findPath.replace(currPath, "")] = findPath;
      staticObj[findPath.slice(rootPath.length)] = findPath;
      staticObj[findPath.slice(rootPath.length).replace("index.html", "")] =
        findPath;
    } else {
      find(findPath);
    }
  });
};

find(rootPath);
console.log(staticObj);
// const currPath1 = path.join(__dirname, "../", "views", "write1");

// const isFile = fs.statSync(currPath1).isFile();
// console.log(isFile);

staticObj["/index.html"] =
  "/Users/idongchan/Desktop/AWS/study/study/15.node/230325/views/index.html";

module.exports = staticObj;
