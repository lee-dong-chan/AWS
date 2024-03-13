const numlist = document.getElementById("numlist");
const culElem = document.getElementById("cul");
const calculatorElam = document.getElementById("calculator");
//숫자
const oneElem = numlist.getElementsByClassName("one")[0];
const twoElem = numlist.getElementsByClassName("two")[0];
const threeElem = numlist.getElementsByClassName("three")[0];
const fourElem = numlist.getElementsByClassName("four")[0];
const fiveElem = numlist.getElementsByClassName("five")[0];
const sixElem = numlist.getElementsByClassName("six")[0];
const sevenElem = numlist.getElementsByClassName("seven")[0];
const eightElem = numlist.getElementsByClassName("eight")[0];
const nineElem = numlist.getElementsByClassName("nine")[0];
const zeroElem = numlist.getElementsByClassName("zero")[0];

//연산자
const plusElem = calculatorElam.getElementsByClassName("plus")[0];
const minusElem = calculatorElam.getElementsByClassName("minus")[0];
const multiElem = calculatorElam.getElementsByClassName("multi")[0];
const divideElem = calculatorElam.getElementsByClassName("divide")[0];

//기능

const clearElem = calculatorElam.getElementsByClassName("clear")[0];
const resultElem = calculatorElam.getElementsByClassName("result")[0];

// 숫자 입력
i = 4;
front = 0;
behind = 0;
oneElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("one");
  culElem.innerHTML += `<th>1</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "1";
  } else {
    front += "1";
  }
  calculatorElam.classList = [];
};

twoElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("two");
  culElem.innerHTML += `<th>2</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "2";
  } else {
    front += "2";
  }
  calculatorElam.classList = [];
};

threeElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("three");
  culElem.innerHTML += `<th>3</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "3";
  } else {
    front += "3";
  }
  calculatorElam.classList = [];
};
fourElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("four");
  culElem.innerHTML += `<th>4</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "4";
  } else {
    front += "4";
  }
  calculatorElam.classList = [];
};
fiveElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("five");
  culElem.innerHTML += `<th>5</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "5";
  } else {
    front += "5";
  }
  calculatorElam.classList = [];
};
sixElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("six");
  culElem.innerHTML += `<th>6</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "6";
  } else {
    front += "6";
  }
  calculatorElam.classList = [];
};
sevenElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("seven");
  culElem.innerHTML += `<th>7</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "7";
  } else {
    front += "7";
  }
  calculatorElam.classList = [];
};
eightElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("eight");
  culElem.innerHTML += `<th>8</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "8";
  } else {
    front += "8";
  }
  calculatorElam.classList = [];
};
nineElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("nine");
  culElem.innerHTML += `<th>9</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "9";
  } else {
    front += "9";
  }
  calculatorElam.classList = [];
};

zeroElem.onclick = () => {
  numlist.classList = [];
  numlist.classname = "";
  numlist.classList.add("zero");
  culElem.innerHTML += `<th>0</th>`;
  if (i == 0 || i == 1 || i == 2 || i == 3) {
    behind += "0";
  } else {
    front += "0";
  }
  calculatorElam.classList = [];
};

//연산자
plusElem.onclick = () => {
  culElem.innerHTML += `<th>+</th>`;
  i = 0;
  calculatorElam.classList = [];
  calculatorElam.classname = "";
  calculatorElam.classList.add("plus");
  numlist.classList = [];
};

minusElem.onclick = () => {
  culElem.innerHTML += `<th>-</th>`;
  i = 1;
  calculatorElam.classList = [];
  calculatorElam.classname = "";
  calculatorElam.classList.add("minus");
  numlist.classList = [];
};

multiElem.onclick = () => {
  culElem.innerHTML += `<th>*</th>`;
  i = 2;
  calculatorElam.classList = [];
  calculatorElam.classname = "";
  calculatorElam.classList.add("multi");
  numlist.classList = [];
};

divideElem.onclick = () => {
  culElem.innerHTML += `<th>/</th>`;
  i = 3;
  calculatorElam.classList = [];
  calculatorElam.classname = "";
  calculatorElam.classList.add("divide");
  numlist.classList = [];
};

function value(a, b) {
  if (i == 0) {
    return a + b;
  } else if (i == 1) {
    return a - b;
  } else if (i == 2) {
    return a * b;
  } else if (i == 3) {
    return a / b;
  }
}

//기능

resultElem.onclick = () => {
  culElem.innerHTML = "";

  num1 = new Number(front);
  num2 = new Number(behind);

  result = value(num1, num2);
  culElem.innerHTML += `<th>${result}</th>`;
  front = "";
  behind = "";
  front = result;
  calculatorElam.classList = [];
  numlist.classList = [];
};

clearElem.onclick = () => {
  culElem.innerHTML = ``;
  front = [];
  behind = [];
  end = [];
  calculatorElam.classList = [];
  numlist.classList = [];
  i = 4;
};

// 숫자계산;

// c = [1, 2, 3];
// d = [2, 3, 6];

// first = c.join("");
// back = d.join("");

// result = (first - back);
