const comSel = [];
while (comSel.length < 3) {
  //comsel 의 배열속 인덱스가 3개미만 일떄까지 반복
  const temp = parseInt(Math.random() * 8 + 1);

  if (comSel.indexOf(temp) == -1) {
    // indexOF가 -1 이면 ---> 값이 없을떄 는 -1
    comSel.push(temp);
    // 배열상에 값이 없을 경우 comsesl 배열에 해당값을 추가
  }
}

console.log(comSel);

let result = [0, 0, 0];
let isEnd = false; //isEnd의 기본값은 false
while (result[0] != 3 && !isEnd) {
  result = [0, 0, 0];
  const userSel = [];
  while (userSel.length < 3) {
    //usersel 배열의 값의 수가 3개가 되기전까지 반복
    let temp = prompt("1~9 중 1번째 숫자를 입력해주세요.");
    //유저가 값을 입력
    if (temp == "끝") {
      isEnd = true;
      break;
      //temp에 "끝"이라는 값이 입력되면 isEnd를 참값으로 변경----> while 조건문의 isEnd가 참이 되기때문에 반복문 정지
    }
    userSel.push(+temp);
    //값을 usersel 배열에 추가
  }
  if (isEnd) {
    console.log("강제 종료");
    break;
  }

  for (let i = 0; i < userSel.length; i++) {
    //usersel
    const temp = comSel.indexOf(userSel[i]);
    if (temp == -1) {
      result[2] += 1;
    } else if (comSel[temp] == userSel[temp]) {
      result[0] += 1;
    } else {
      result[1] += 1;
    }
  }
  console.log("유저 입력 : " + userSel.join(""));
  console.log("S : " + result[0] + ", B : " + result[1] + ", O : " + result[2]);
}

console.log("컴퓨터의 숫자는 " + comSel.join("") + "이었습니다~");
