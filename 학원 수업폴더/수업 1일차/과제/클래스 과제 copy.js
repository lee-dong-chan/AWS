//클래스 과제
//class 예약어를 사용하여 취미 데이터을 만들어 보자
//취미는 이름과 방법,소요시간(분),소요 비용(천원 단위)로 저장
//toString 호출시
//"이름" 은는 약 '소요비용'만원을 사용하여 '소요시간' 동안 즐길수 있다 로 출력

const toString = function (a, b, c) {
  return (
    a +
    "은 약" +
    b / 10000 +
    "만원을 사용하여" +
    c / 60 +
    "시간 동안 즐길수 있다"
  );
};

class Hobbylist {
  hobby;
  constructor(name, how, time, money) {
    this.hobby = toString(name, money, time);
  }
}

const pcRoom = new Hobbylist("pc게임", "pc를 이용한 게임 ", 60, 1000);
const ballLing = new Hobbylist("볼링", "볼을 이용하여 핀을 쓰러트림", 60, 9000);
const pocketBall = new Hobbylist(
  "포켓볼",
  "9개의 공을 순차로 구멍에 넣는다",
  60,
  8000
);

list = [pcRoom.hobby, ballLing.hobby, pocketBall.hobby];

list.forEach(function (item) {
  console.log(item);
});

// for (i = 0; i < 3; i++) {
//   console.log(hobby1[i].hobby);
// }

// const add = function (a, b, c) {
//   return (
//     a +
//     "은 약" +
//     b / 10000 +
//     "만원을 사용하여" +
//     c / 60 +
//     "시간 동안 즐길수 있다"
//   );
// };

let add = function (a, b) {
  return a + b;
};

let minus = function (a, b) {
  return a - b;
};

let divde = function (a, b) {
  return a / b;
};

let multi = function (a, b) {
  return a * b;
};

let result = minus(add(1, divde(multi(2, 3), 4)), 5);
console.log(result);
