const arr = [
  [1, 2, 3, 4, 5, "☝"],
  [7, 8, 9, 10, 11, 6],
  [13, 14, 15, 16, 17, 12],
  [19, 20, 21, 22, 23, 18],
  [25, 26, 27, 28, 29, 24],
  [31, 32, 33, 34, 35, 30],
];
//숫자 퍼즐의 위치를 알수있도록 좌표화하는 이중배열
// console.log(Math.floor(Math.random() * 3));
// console.log(isNAN(+"a"));

console.log(arr[5][5]);
// const max = [6, 6];
const max = { i: 6, j: 6 };
//제목과 빈칸을 포함하는 최대범위
// const now = [4, 4];
const now = { i: 5, j: 5 };
//현재 빈카의 위치를 나타냄
let isStart = true;
//true일경우에는 숫자퍼즐이 다맞춰지지않아 움직일수있고 false일 경우에는 숫자퍼즐이 모두 다맞춰져서 움직일수 없도록 한다.
// const ARROW = {
//   top: 0,
//   right: 1,
//   bottom: 2,
//   left: 3,
// };

const move = (arrow) => {
  //0~3, 'top' 'bottom'
  if (isNaN(+arrow)) {
    //arrow를 글자로 받았는 지 확인
    if (arrow == "top") arrow = 0;
    //arrow가 "top"과 같을 경우 arrow의 값은 0
    else if (arrow == "right") arrow = 1;
    //arrow가 "right"과 같을 경우 arrow의 값은 1
    else if (arrow == "bottom") arrow = 2;
    //arrow가 "bottom"과 같을 경우 arrow의 값은 2
    else if (arrow == "left") arrow = 3;
    //arrow가 "left"과 같을 경우 arrow의 값은 3
    // arrow =ARROW[arrow];
  }
  const next = { ...now };
  //next는 now를 깊은 복사하여 now의 값을 스프레드 연산자로 분해하여 객체에 할당  now에는 영향을 미치지 않는다 next{i:now.i,j:now.j}
  //(next=now 얕은 복사시에는 next의 변화가 now에 영향을 미친다. )
  if (arrow == 0) {
    // arr[now.i][now.j]= arr[now.i-1][now.j]
    // arr[now.i-1][now.j]=0
    next.i -= 1;
    //arrow가 "top"일 경우 =0 next의 i값을 -1한다.
  } else if (arrow == 1) {
    // arr[now.i][now.j]= arr[now.i][now.j+1]
    // arr[now.i][now.j+1]=0
    next.j += 1;
    //arrow가 "right"일 경우 =0 next의 j값을 +1한다.
  } else if (arrow == 2) {
    // arr[now.i][now.j]= arr[now.i+1][now.j]
    // arr[now.i+1][now.j]=0
    next.i += 1;
    //arrow가 "bottom"일 경우 =0 next의 i값을 +1한다.
  } else if (arrow == 3) {
    // arr[now.i][now.j]= arr[now.i][now.j-1]
    // arr[now.i][now.j-1]=0
    next.j -= 1;
    //arrow가 "left"일 경우 =0 next의 i값을 +1한다.
  }
  arr[now.i][now.j] = arr[next.i][next.j];
  arr[next.i][next.j] = 0;
  now.i = next.i;
  now.j = next.j;
  // 깊은 복사를 통하엿기 때문에 영향을 미치지않는다 얕은 복사를 통하여   next의 최종변화값이 now값에 연결된다
};
// move("top");
// move("top");
console.log(arr);

const mix = () => {
  //랜덤하게 뽑고 옮길수 있는지 확인후에 옮겨주자 10번
  for (let i = 0; i < 1000; i++) {
    const randomArrow = Math.floor(Math.random() * 4);
    //randomArrow는 0~3까지의 랜덤난수
    if (
      (randomArrow == 0 && now.i == 0) ||
      (randomArrow == 1 && now.j == max.j - 1) ||
      (randomArrow == 2 && now.i == max.i - 1) ||
      (randomArrow == 3 && now.j == 0)
    ) {
      //randomArrow가 0이고 now의 i값 또한 0일떄 또는
      //randomArrow가 1이고 now의 j값 또한 max.j-1일떄 또는
      //randomArrow가 2이고 now의 i값 또한 max.i-1일떄 또는
      //randomArrow가 3이고 now의 j값 또한 0일떄 마다
      i--;
      //i값을 1씩줄인다.
      continue;
      //한번 실행될때마다 다음 move를 실행하도록 함
    }
    move(randomArrow);
    //move함수를 호출
  }
  // 0="top"
  // 1="right"
  // 2="bottom"
  // 3="left"
  // move(Math.floor(Math.random()*4))
};
// mix();
const numsElems = document.getElementsByClassName("nums");
//numsELems는 HTML에서 "nums"라는 클래스 네임을 가진것들이다.
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++)
    if (arr[i][j] != 0) {
      numsElems[i * 6 + j].innerHTML = arr[i][j];
    }
  //arr[i][j]가 0이아니라면
  //numsElems[i*6+J]의 위치에 arr[i][j]값을 가진HTML을 추가한다.
  //i는 0 부터 시작하고 arr의 배열의 길이수 보다 적을떄 i에 1을 추가하여 반복한다.
  //j는 0 부터 시작하고 arr[i]의 배열의 길이수 보다 적을떄 j에 1을 추가하여 반복한다.---->이중배열
  // if (arr[i][j] ==0) continue;
  //     numsElems[i * 6 + j].innerHTML = arr[i][j];
  //for문이 반복되면서 이중배열상의 좌표에 따라 35개 숫자가 순차적으로 입력됨
}

const elems = {
  now: undefined,
  top: undefined,
  left: undefined,
  bottom: undefined,
  right: undefined,
  reset: function () {
    if (elems.now) elems.now.onclick = undefined;
    if (elems.top) elems.top.onclick = undefined;
    if (elems.left) elems.left.onclick = undefined;
    if (elems.bottom) elems.bottom.onclick = undefined;
    if (elems.right) elems.right.onclick = undefined;
  },
};

const setNow = () => {
  //함수 setNow선언 화살표함수
  elems.reset();
  //객체 elems의 reset호출
  let tempCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i * max.i + j + 1 == arr[i][j]) tempCount++;
    }
  }
  //temlpcount의 값이 0일떄 (i*max.i+j+1)의 값이 이중배열 arr[i][j]의 값과같다면 tempcount의 값을 1더하는것을 반복한다
  //  i=0이고 arr의 길이보다 작을떄 까지만 1씩 증가한다
  //j=0이고 arr.[i]의 길이보다 작을떄 까지만 j는 1씩 증가한다.
  if (tempCount == 35) {
    isStart = false;
    for (let i = 0; i < max.i; i++) {
      arr[i][5] = i * 6;
    }
    //tempcount가 35와 같다면 isStart는 false가 된다,

    arr[0][5] = document.getElementById("play").innerText;
    document.getElementById("play").innerText = "";
    //arrr[0][5]는 빈칸이 된다.
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++)
        if (arr[i][j] != 0) {
          numsElems[i * 6 + j].innerHTML = arr[i][j];
        }
      // if (arr[i][j] ==0) continue;
      //     numsElems[i * 6 + j].innerHTML = arr[i][j];
      //
    }
    setStart();
  }

  if (!isStart) return;
  elems.now = numsElems[now.i * 6 + now.j];

  if (now.i > 0) {
    elems.top = numsElems[(now.i - 1) * 6 + now.j];
    elems.top.onclick = () => {
      elems.now.innerHTML = elems.top.innerHTML;
      elems.top.innerHTML = "";
      arr[now.i][now.j] = arr[now.i - 1][now.j];
      arr[now.i - 1][now.j] = 0;

      now.i--;
      setNow();
    };
  }

  if (now.j > 0) {
    elems.left = numsElems[now.i * 6 + (now.j - 1)];
    elems.left.onclick = () => {
      elems.now.innerHTML = elems.left.innerHTML;
      elems.left.innerHTML = "";
      arr[now.i][now.j] = arr[now.i][now.j - 1];
      arr[now.i][now.j - 1] = 0;

      now.j--;
      setNow();
    };
  }
  if (now.i < max.i - 1) {
    elems.bottom = numsElems[(now.i + 1) * 6 + now.j];
    elems.bottom.onclick = () => {
      elems.now.innerHTML = elems.bottom.innerHTML;
      elems.bottom.innerHTML = "";
      arr[now.i][now.j] = arr[now.i + 1][now.j];
      arr[now.i + 1][now.j] = 0;

      now.i++;
      setNow();
    };
  }
  if (now.j < max.j - 1) {
    elems.right = numsElems[now.i * 6 + (now.j + 1)];
    elems.right.onclick = () => {
      elems.now.innerHTML = elems.right.innerHTML;
      elems.right.innerHTML = "";
      arr[now.i][now.j] = arr[now.i][now.j + 1];
      arr[now.i][now.j + 1] = 0;

      now.j++;
      setNow();
    };
  }
};
setNow();

const setStart = () => {
  document.getElementsByClassName("item")[11].onclick = (e) => {
    document.getElementById("play").innerText = arr[0][5];
    arr[0][5] = 0;
    now.i = 0;
    now.j = 5;
    mix();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++)
        if (arr[i][j] != 0) {
          numsElems[i * 6 + j].innerHTML = arr[i][j];
        } else {
          numsElems[i * 6 + j].innerHTML = "";
        }
      // if (arr[i][j] ==0) continue;
      //     numsElems[i * 6 + j].innerHTML = arr[i][j];
      //
    }
    document.getElementsByClassName("item")[11].onclick = undefined;
    isStart = true;
    setNow();
  };
};

setStart();
