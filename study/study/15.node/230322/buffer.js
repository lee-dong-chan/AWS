const buf1 = Buffer.from("abcdefg");
//<Buffer 61 62 63 64>
console.log(buf1);

const buf2 = Buffer.from("abcdefg");

console.log(buf2.toString());
console.log(buf2);
console.log(buf2.length, buf2.toString().length);

const buf3 = Buffer.from("가나다라");
console.log(buf3);
console.log(buf3.length, buf3.toString().length);

const buf4 = Buffer.from("ㄱ");
console.log(buf4);
console.log(buf4.length, buf4.toString().length);
//3byte -> 1bype? ==>8bit ==0 ~ 255 == 0~FF =>Buffer 한칸?
console.log("r".charCodeAt().toString(16));
console.log("\u3131");
// https://decode.com/

console.log(Buffer.from(' !"'));
