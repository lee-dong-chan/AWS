const { globalAgent } = require("http");
const path = require("path");

console.log(__dirname); //-->현재 경로
console.log(__filename); //-->파일이름
console.log(path.basename(__filename)); //-->파일이름
console.log(path.dirname(__filename)); //--->현재폴더 넣어둔게없어서 모름
console.log(path.extname(__filename)); //-->확장자
console.log(path.join(__dirname, "public", "..")); //-->확장자

console.log(global);
