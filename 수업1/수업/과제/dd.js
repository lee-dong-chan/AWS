class Hobby {
  name;
  how;
  time;
  cost;
  constructor(name, how, time, cost) {
    this.name = name;
    this.how = how;
    this.time = time;
    this.cost = cost;
  }
  toString() {
    return (
      this.name +
      "은/는약" +
      this.cost / 10 +
      "만원을 사용 하여" +
      this.time / 60 +
      "시간동안 즐길수 있다."
    );
  }
}

const palworld = new Hobby(
  "팰월드",
  "스팀에서 팰월드를 사서 실행한다.그리고 즐긴다",
  40 * 60,
  32000 / 1000
);

console.log(palworld.toString());
