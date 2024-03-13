const slideElem = document.getElementsByClassName("slide-item");
const titleElem = document.getElementsByClassName("title-item");
let idx = 1;
let interval;

const move = () => {
  slideElem[0].classList.remove("on");
  slideElem[(idx + 10) % 11].classList.add("on");
  titleElem[(idx + 10) % 11].classList.add("on");
};

const createInterval = () => {
  interval = setInterval(() => {
    slideElem[(idx + 10) % 11].classList.remove("on");
    titleElem[(idx + 10) % 11].classList.remove("on");
    idx++;
    move();
    console.log(idx);
  }, 2000);
};
createInterval();

const upElem = document.getElementById("up");
const downElem = document.getElementById("down");

upElem.onclick = () => {
  slideElem[(idx + 10) % 11].classList.remove("on");
  titleElem[(idx + 10) % 11].classList.remove("on");
  idx--;
  console.log(idx);
  move();
};

downElem.onclick = () => {
  slideElem[(idx + 10) % 11].classList.remove("on");
  titleElem[(idx + 10) % 11].classList.remove("on");
  idx++;
  console.log(idx);
  move();
};

const btnsElem = document.getElementById("play-btns");

document.getElementById("stop").onclick = () => {
  clearInterval(interval);
  btnsElem.classList.remove("on");
};

document.getElementById("play").onclick = () => {
  createInterval(interval);
  btnsElem.classList.add("on");
};
