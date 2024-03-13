let slide = document.getElementsByClassName("slide")[0];
let img = document.getElementsByClassName("img")[0];
let scr = document.getElementsByClassName("scroll-button")[0];

let button = scr.getElementsByClassName("button-scroll")[0];
let img1 = img.getElementsByClassName("img1")[0];
let img2 = img.getElementsByClassName("img2")[0];
let img3 = img.getElementsByClassName("img3")[0];
let img4 = img.getElementsByClassName("img4")[0];

// image = [img1, img2, img3, img4];
// console.log(image);
// console.log(button);

// let interval;
// let x = 0;

button.onclick = () => {
  interval = setInterval(() => {
    img.style.left = -x + "%";

    if (x >= 100) {
      clearInterval(interval);
    }
    x++;
  }, 1);
};
