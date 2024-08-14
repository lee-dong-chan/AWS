const categoryList = [
  { name: "전체", href: "./" },
  {
    name: "정보",
    href: "./",
    categorys: [
      {
        name: "OP.GG 기획",
        href: "./",
      },
      { name: "유저 뉴스", href: "./", isWrite: true },
      { name: "팁과 노하우", href: "./", isWrite: true },
      { name: "패치노트", href: "./" },
    ],
  },
  {
    name: "커뮤니티",
    href: "./",
    categorys: [
      { name: "자유", href: "./", isWrite: true },
      { name: "유머", href: "./", isWrite: true },
      { name: "질문", href: "./", isWrite: true },
      { name: "영상", href: "./", isWrite: true },
      { name: "사건 사고", href: "./", isWrite: true },
      { name: "전적 인증", href: "./", isWrite: true },
      { name: "팬 아트", href: "./", isWrite: true },
    ],
  },
  {
    name: "e스포츠",
    href: "./",
    categorys: [
      { name: "LCK", href: "./", isWrite: true },
      { name: "기타 리그", href: "./", isWrite: true },
    ],
  },
];

const cateElem = document.getElementById("category-list");

categoryList.forEach((cate1) => {
  let str = "";
  if (cate1.categorys) {
    str += `
    <li>
      <a href="${cate1.href}">
        <h4>${cate1.name}<span>&gt</span></h4>
      </a>
      <ul>`;
    cate1.categorys.forEach((cate2) => {
      str += `
        <li>
          <a href="${cate2.href}"><span>${cate2.name}</span></a>
        </li>`;
    });
    str += `
      </ul>
    </li>`;
  } else {
    str += `
    <li>
      <a href="${cate1.href}"><h4>${cate1.name}</h4></a>
    </li>`;
  }
  cateElem.innerHTML += str;
});

const linkList = [
  { name: "유저 찾기", href: "./", img: "./imgs/icon-community-lfg.png" },
  { name: "양성소", href: "./", img: "./imgs/icon-community-subculture.png" },
  { name: "잡담소", href: "./", img: "./imgs/icon-community-talk.png" },
];

const linkListElem = document.getElementById("link-list");

// linkListElem.onblur VS onfocus

linkList.forEach((link) => {
  linkListElem.innerHTML += `
  <li>
    <a href="${link.href}">
      <div class="link-item">
        <div class="img-box">
          <img src="${link.img}" alt="" />
        </div>
        <span>${link.name}</span>
      </div>
    </a>
  </li>`;
});

const tempArr = [...categoryList];
const cateSeleElem = document.getElementById("category");

for (let i = 0; i < tempArr.length; ++i) {
  cateSeleElem.innerHTML += `<option value="${tempArr[i].href}">${tempArr[i].name}</option>`;
  if (tempArr[i].categorys) tempArr.push(...tempArr[i].categorys);
}

const listElem = document.getElementById("list");
(async () => {
  const list = (
    await axios.get(
      "http://localhost:8000/board/list",
      {},
      {
        withCredentials: true,
      }
    )
  ).data;

  for (let i = 0; i < list.length; i++)
    listElem.innerHTML += `<li>
<a href="/board?id=${list[i].id}">
  <div class="item">
    <div class="like">
      <p>▲</p>
      <p>123</p>
    </div>
    <div class="text">
      <h4>${list[i].title}<span>[32]</span></h4>
      <p>${list[i].Category.name} | ${list[i].createAt}시간 전 | ${list[i].User.nick}</p>
    </div>
    <div class="img">
      <img src="./imgs/bg_lol.jpg" alt="" />
    </div>
  </div>
</a>
</li>`;
  console.log(list);
})();
const userInfoElem = document.getElementById("user-info");
(async () => {
  // const user = (
  //   await axios({
  //     method: "post",
  //     url: "http://localhost:8000/user/info",
  //     withCredentials: true,
  //   })
  // ).data;

  const user = (
    await axios.post(
      "http://localhost:8000/user/info", //url
      {}, //body
      {
        withCredentials: true, //option
      }
    )
  ).data;

  if (user.user) {
    userInfoElem.innerHTML = ` <div class="user-info">
    <div>
<div class="user">
  <div>
    <div><img src="./imgs/icon-level-1.png" /></div>
    <div class="info">
      <div class="id">${user.user}</div>
      <div class="level">레벨1</div>
      <div class="exe"></div>
      <div class="next">다음 레벨까지 11남음</div>
    </div>
  </div>
</div>
<div class="info-menu">
  <div class="menu">
    <div>
      <a href="./"><span>내가 쓴 글</span></a>
      <a href="./"><span>내가 쓴 댓글</span></a>
    </div>
    <div>
      <a href="./"><span>내가 와드</span></a>
      <a class="write" href="./write"><span>글쓰기</span></a>
    </div>
  </div>
  <div class="game">
    <a href="./">
      <div class="connect">게임 계정 연결</div>
    </a>
  </div>
  </div>
</div>
</div>`;
  }
})();
