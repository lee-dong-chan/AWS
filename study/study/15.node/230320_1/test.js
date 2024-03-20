//계산기 가져와서 사용보자
// const calc1 = require("./calc");

// console.log(calc1.add(4, 2));
// console.log(calc1.divide(4, 2));
// console.log(calc1.multiple(4, 2));
// console.log(calc1.minus(4, 2));

const { add, minus, divide, multiple } = require("./calc");
//const{add,minus,divide,mutiple} = calc 구조분해할당

console.log(add(4, 2));
console.log(divide(4, 2));
console.log(multiple(4, 2));
console.log(minus(4, 2));
