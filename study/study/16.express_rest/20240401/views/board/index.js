const tagElem = document.getElementsByClassName("h-tag");
const contentElem = document.getElementsByClassName("h-content");
const inlinkElem = document.getElementsByClassName("in-link");
const invenElem = document.getElementsByClassName("inven");
const benElem = document.getElementsByClassName("ben");
const poElem = document.getElementsByClassName("po-list");

const change = () => {
  benElem[0].onmouseover = () => {
    benElem[1].classList.remove("on");
    benElem[0].classList.add("on");
    poElem[1].classList.remove("on");
    poElem[0].classList.add("on");
  };
  benElem[1].onmouseover = () => {
    benElem[0].classList.remove("on");
    benElem[1].classList.add("on");
    poElem[0].classList.remove("on");
    poElem[1].classList.add("on");
  };
};
tagElem[0].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[0].classList.add("on");
  contentElem[0].classList.add("on");
};

tagElem[1].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[1].classList.add("on");
  contentElem[1].classList.add("on");
};

tagElem[2].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[2].classList.add("on");
  contentElem[2].classList.add("on");
};

tagElem[3].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[3].classList.add("on");
  contentElem[3].classList.add("on");
};

tagElem[4].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[4].classList.add("on");
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
change();

id = location.search.slice(4);
console.log(id);
const getContent = async () => {
  try {
    const usersRes = await fetch("/board", {
      method: "post",
      mode: "no-cors",
      body: `id=${id}`,
    });

    console.log(usersRes);
    const usersData = await usersRes.text();
    console.log(usersData);
    const userArr = JSON.parse(usersData);
    //const userArr= Json.parse()
    console.log(userArr);

    const titleElem = document.getElementById("content-title");
    const writerElem = document.getElementById("content-writer");
    const contentElem = document.getElementById("content-box");
    const dateElem = document.getElementById("board-date");
    userArr.forEach((item) => {
      if (id == item.id) {
        titleElem.innerText = item.title.replaceAll("+", " ");
        writerElem.innerText = item.writer.replaceAll("+", " ");
        contentElem.innerText = item.text.replaceAll("+", " ");
        dateElem.innerText = item.createdAT;
      }
    });
  } catch (err) {
    console.log(err);
  }
};
getContent();
