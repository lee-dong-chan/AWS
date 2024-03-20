const SRC = {
  scissors: 0,
  rock: 1,
  paper: 2,
  0: "scissors",
  1: "rock",
  2: "paper",
};

//바위 > 가위 -> 1- 0 => 1+3 =>4%3=>1
//보 > 바위 -> 2-1-> 1+3 => 4%3=>1
//가위 > 보 -> 0-2-> -2+3 => 1%3=>1
const resultElem = document.getElementById("result");
const comSelElem = document.getElementById("com-sel");
const userSelElem = document.getElementById("user-sel");
const userSciELem = userSelElem.getElementsByClassName("scissors")[0];
const userRocELem = userSelElem.getElementsByClassName("rock")[0];
const userPapELem = userSelElem.getElementsByClassName("paper")[0];

const play = (userSel) => {
  const comSel = Math.floor(Math.random() * 3);
  console.log(comSel);
  comSelElem.className = "";
  comSelElem.classList.add(SRC[comSel]);
  userSelElem.className = "";
  userSelElem.classList.add(SRC[userSel]);
  //   const userSel = 1;

  let result = (userSel - comSel + 3) % 3;
  if (result == 1) {
    result = "win";
  } else if (result == 2) {
    result = "lose";
  } else {
    result = "draw";
  }
  return result;
};

userSciELem.onclick = () => {
  resultElem.innerHTML = play(SRC.scissors);
};
userRocELem.onclick = () => {
  resultElem.innerHTML = play(SRC.rock);
};
userPapELem.onclick = () => {
  resultElem.innerHTML = play(SRC.paper);
};
