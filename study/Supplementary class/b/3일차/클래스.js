//javascript는 어떤 자료구조를 기반으로 두고 있을까?
//prototype을 기반으로 언어가 만들어 졋다.

const date = new Date("2000.02.24");
console.log(date);

//class

function creatPerson(name, age) {
  return { name, age };
}

let lee = creatPerson("이동찬", 29);
console.log(lee);
