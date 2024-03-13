const arr = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 0, 30],
  [31, 32, 33, 34, 35, 29],
];

const numelem = document.getElementsByClassName("num");
const now = { i: 4, j: 4 };
const max = { i: 6, j: 6 };

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++)
    if (arr[i][j] != 0) {
      numelem[i * 6 + j].innerHTML = arr[i][j];
    }
}
//---------------------------------------------------------

const setnow = () => {
  nowelem = numelem[now.i * 6 + now.j];
  topelem = numelem[(now.i - 1) * 6 + now.j];
  leftelem = numelem[now.i * 6 + (now.j - 1)];
  rightelem = numelem[now.i * 6 + (now.j + 1)];
  bottomelem = numelem[(now.i + 1) * 6 + now.j];
  if (now.i > 0) {
    topelem.onclick = () => {
      nowelem.innerHTML = topelem.innerHTML;
      topelem.innerHTML = "";
      // arr[i][j] = arr[i - 1][j];
      // arr[i - 1][j] = 0;
      now.i--;
      setnow();
    };
  }

  if (now.j > 0) {
    leftelem.onclick = () => {
      nowelem.innerHTML = leftelem.innerHTML;
      leftelem.innerHTML = "";
      // arr[i][j] = arr[i][j - 1];
      // arr[i][j - 1] = 0;
      now.j--;
      setnow();
    };
  }

  if (now.i < max.i) {
    bottomelem.onclick = () => {
      nowelem.innerHTML = bottomelem.innerHTML;
      bottomelem.innerHTML = "";
      now.i++;
      setnow();
    };
  }

  if (now.i < max.j) {
    rightelem.onclick = () => {
      nowelem.innerHTML = rightelem.innerHTML;
      rightelem.innerHTML = "";
      now.j++;
      setnow();
    };
  }
};
setnow();
