const tagElem = document.getElementsByClassName("h-tag");
const contentElem = document.getElementsByClassName("h-content");
const inlinkElem = document.getElementsByClassName("in-link");
const invenElem = document.getElementsByClassName("inven");
const change = () => {
  document.getElementsByClassName("ben")[0].onmouseover = () => {
    document.getElementsByClassName("ben")[1].classList.remove("on");
    document.getElementsByClassName("ben")[0].classList.add("on");
    document.getElementsByClassName("po-list")[1].classList.remove("on");
    document.getElementsByClassName("po-list")[0].classList.add("on");
  };
  document.getElementsByClassName("ben")[1].onmouseover = () => {
    document.getElementsByClassName("ben")[0].classList.remove("on");
    document.getElementsByClassName("ben")[1].classList.add("on");
    document.getElementsByClassName("po-list")[0].classList.remove("on");
    document.getElementsByClassName("po-list")[1].classList.add("on");
  };

  tagElem[0].onmouseover = () => {
    tagElem[1].classList.remove("on");
    tagElem[2].classList.remove("on");
    tagElem[3].classList.remove("on");
    tagElem[4].classList.remove("on");
    tagElem[0].classList.add("on");
    contentElem[1].classList.remove("on");
    contentElem[2].classList.remove("on");
    contentElem[3].classList.remove("on");
    contentElem[4].classList.remove("on");
    contentElem[0].classList.add("on");
  };

  tagElem[1].onmouseover = () => {
    tagElem[0].classList.remove("on");
    tagElem[2].classList.remove("on");
    tagElem[3].classList.remove("on");
    tagElem[4].classList.remove("on");
    tagElem[1].classList.add("on");
    contentElem[0].classList.remove("on");
    contentElem[2].classList.remove("on");
    contentElem[3].classList.remove("on");
    contentElem[4].classList.remove("on");
    contentElem[1].classList.add("on");
  };
  tagElem[2].onmouseover = () => {
    tagElem[0].classList.remove("on");
    tagElem[1].classList.remove("on");
    tagElem[3].classList.remove("on");
    tagElem[4].classList.remove("on");
    tagElem[2].classList.add("on");
    contentElem[0].classList.remove("on");
    contentElem[1].classList.remove("on");
    contentElem[3].classList.remove("on");
    contentElem[4].classList.remove("on");
    contentElem[2].classList.add("on");
  };
  tagElem[3].onmouseover = () => {
    tagElem[0].classList.remove("on");
    tagElem[1].classList.remove("on");
    tagElem[2].classList.remove("on");
    tagElem[4].classList.remove("on");
    tagElem[3].classList.add("on");
    contentElem[0].classList.remove("on");
    contentElem[1].classList.remove("on");
    contentElem[2].classList.remove("on");
    contentElem[4].classList.remove("on");
    contentElem[3].classList.add("on");
  };

  tagElem[4].onmouseover = () => {
    tagElem[0].classList.remove("on");
    tagElem[1].classList.remove("on");
    tagElem[2].classList.remove("on");
    tagElem[3].classList.remove("on");
    tagElem[4].classList.add("on");
    contentElem[0].classList.remove("on");
    contentElem[1].classList.remove("on");
    contentElem[2].classList.remove("on");
    contentElem[3].classList.remove("on");
    contentElem[4].classList.add("on");
  };
  inlinkElem[0].onmouseover = () => {
    inlinkElem[1].classList.remove("on");
    inlinkElem[0].classList.add("on");
    invenElem[1].classList.remove("on");
    invenElem[0].classList.add("on");
  };
  inlinkElem[1].onmouseover = () => {
    inlinkElem[0].classList.remove("on");
    inlinkElem[1].classList.add("on");
    invenElem[0].classList.remove("on");
    invenElem[1].classList.add("on");
  };
};
change();
