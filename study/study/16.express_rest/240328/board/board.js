const listElem = document.getElementById("list");

// const viewElem = document.getElementById("view");
const titleElem = document.getElementById("v-title");
const writerElem = document.getElementById("v-id");
const dateElem = document.getElementById("v-creatat");
const contentElem = document.getElementById("view-content");

class Board {
  static #count = 1;
  #id;
  #title;
  #writer;
  #content;
  #createAt;
  #isNotice = false;

  constructor(title, writer, content) {
    this.#id = Board.#count++;
    this.#title = title;
    this.#writer = writer;
    this.#content = content;
    this.#createAt = this.#createDate();
  }
  #createDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };
  getID = () => this.#id;
  getTitle = () => this.#title;
  getWriter = () => this.#writer;
  getContent = () => this.#content;
  getCreatedAT = () => this.#createAt;
  getIsNotice = () => this.#isNotice;
}

const list = [
  new Board("오늘의 점심은?", "이정배", "도시락"),
  new Board("오늘의 저녁은?", "이승배", "뭐먹지"),
  new Board("오늘의 과제는?", "방지환", "지워주세요"),
];
console.log(list);

const setview = (idx) => {
  titleElem.innerText = list[idx].getTitle();
  writerElem.innerText = list[idx].getWriter();
  dateElem.innerText = list[idx].getCreatedAT();
  contentElem.innerText = list[idx].getContent();
};

const reRender = () => {
  listElem.innerHTML = `<li class="header">
<ul class="row">
  <li class="num box-center">번호</li>
  <li class="title box-center">제목</li>
  <li class="writer box-center">글쓴이</li>
  <li class="createAT box-center">등록일</li>
</ul>
</li>`;

  list.forEach((item) => {
    const tempElem = document.createElement("li");
    tempElem.classList.add("item");
    if (item.getIsNotice()) {
      tempElem.classList.add("notice");
    }

    tempElem.innerHTML = `
    <ul class="row">
      <li class="num box-center">${item.getID()}</li>
     <li class="title">${item.getTitle()}</li>
      <li class="writer box-center">${item.getWriter()}</li>
      <li class="createAT box-center">${item.getCreatedAT()}</li>
    </ul>
  
  `;
    tempElem.onclick = () => {
      setview(item.getID() - 1);
    };
    listElem.append(tempElem);
  });
};

reRender();

// const contentwrite = () => {
//   list.forEach((item) => {
//     viewElem.innerHTML = `
//   <div id="view">
//   <div class="view-header">
//     <div class="v-title">${item.getTitle()}</div>
//     <div class="v-writer">
//       <div id="v-id">${item.getWriter()}</div>
//     </div>
//   </div>
//   <div class="view-content">${item.getContent()}</div>
// </div>
// </div>`;
//   });
// };

document.getElementById("add-btn").onclick = (e) => {
  e.preventDefault();
  console.log(e.target.form);
  console.log(e.target.form.title.value);
  console.log(e.target.form.writer.value);
  console.log(e.target.form.content.value);
  if (
    e.target.form.title.value == "" ||
    e.target.form.writer.value == "" ||
    e.target.form.content.value == ""
  ) {
    return;
  } else {
    list.push(
      new Board(
        e.target.form.title.value,
        e.target.form.writer.value,
        e.target.form.content.value
      )
    );
  }

  e.target.form.title.value =
    e.target.form.writer.value =
    e.target.form.content.value =
      "";
  reRender();
};
