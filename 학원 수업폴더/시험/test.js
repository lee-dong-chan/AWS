const titleElem = document.getElementsByClassName("title-list");
const slideELem = document.getElementsByClassName("slide-list");

idx = 0;
let interval;
let ismoving = false;

const move = () => {
  slideELem[(idx + 4) % 4].classList.add("on");
  titleElem[(idx + 4) % 4].classList.add("on");
};
move();

const createInterval = () => {
  interval = setInterval(() => {
    slideELem[(idx + 4) % 4].classList.remove("on");
    titleElem[(idx + 4) % 4].classList.remove("on");
    idx++;
    move();
  }, 2000);
};

createInterval();

const playbtnElem = document.getElementsByClassName("playbtns");
document.getElementsByClassName("play").onclick = () => {
  playbtnElem.classlist.remove("on");
  clearInterval(interval);
};

document.getElementsByClassName("pause").onclick = () => {
  playbtnElem.classlist.add("on");
  clearInterval(interval);
};
