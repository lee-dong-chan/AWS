//컴퓨터가 3개의 수를 선택
//3개의 수가 중복되면 안된다. 1 ~9 <<0~8 <<,0<= ~ <1
let comsel1 = Math.floor(Math.random() * 9 + 1);
let comsel2 = Math.floor(Math.random() * 9 + 1);

// console.log(comSel1,comSel2,comSel2)
while (comsel1 == comsel2) {
  comsel2 = Math.floor(Math.random() * 9 + 1);
}

let comsel3 = Math.floor(Math.random() * 9 + 1);
while (comsel1 == comsel3 || comsel2 == comsel3) {
  comsel3 = Math.floor(Math.random() * 9 + 1);
}

// console.log(comsel1, comsel2, comsel3);

//유저 선택
for (let strike = 0, ball = 0, out = 0; strike != 3; ) {
  strike = ball = 0;
  const usersel1 = prompt("1~9 까지의 첫번째 숫자를 선책해 주세요");
  const usersel2 = prompt("1~9 까지의 두번째 숫자를 선책해 주세요");
  const usersel3 = prompt("1~9 까지의 세번째 숫자를 선책해 주세요");

  // 결과확인
  //   let strike = 0;
  //   let ball = 0;
  //   let out = 0;

  if (usersel1 == comsel1) {
    // 'strike'
    strike += 1;
  } else if (usersel1 == comsel2 || usersel1 == comsel3) {
    ball += 1;

    if (usersel2 == comsel2) {
      strike += 1;
    } else if (usersel2 == comsel1 || usersel2 == comsel3) {
      ball += 1;
    }

    if (usersel3 == comsel3) {
      strike += 1;
    } else if (usersel3 == comsel2 || usersel1 == comsel3) {
      ball += 1;
    }

    console.log(usersel1, usersel2, usersel3);
    console.log("s :" + strike, "b :" + ball + "o:" + (3 - strike - ball));
    break;
  }
}

console.log("이걸 맞추네");
