//클래스 과제
//class 예약어를 사용하여 취미 데이터을 만들어 보자
//취미는 이름과 방법,소요시간(분),소요 비용(천원 단위)로 저장
//toString 호출시
//"이름" 은는 약 '소요비용'만원을 사용하여 '소요시간' 동안 즐길수 있다 로 출력

class Hobbylist {
  name;
  how;
  time;
  money;
  constructor(name, how, time, money) {
    this.name = name;
    this.how = how;
    this.time = time;
    this.money = money;
  }
  toString() {
    return (
      this.name +
      "은 약" +
      this.money / 10000 +
      "만원을 사용하여" +
      this.time / 60 +
      "시간 동안 즐길수 있다"
    );
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

console.log(pcRoom.toString());

hobby = [pcRoom, ballLing, pocketBall];

// let list = [];
// for (i = 0; i < 3; i++) {
//   if (i < 3) {
//     list.push(add(hobby[i].name, hobby[i].money, hobby[i].time));
//   }
// }

// list.forEach(function (item) {
//   console.log(item);
// });

// let add = function (a, b) {
//   return a + b;
// };

// let minus = function (a, b) {
//   return a - b;
// };

// let divde = function (a, b) {
//   return a / b;
// };

// let multi = function (a, b) {
//   return a * b;
// };

// let result = minus(add(1, divde(multi(2, 3), 4)), 5);
// console.log(result);
