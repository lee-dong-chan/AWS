const headerElem = document.getElementById("header");

const containerElem = new MyElem({
  tag: "div",
  classList: ["container"],
  parent: headerElem,
});

const menuElem = new MyElem({
  tag: "div",
  classList: ["top-menu", "flex-box"],
  parent: containerElem,
});
const userElem = new DivElem({
  parent: containerElem,
});

const logoElem = new ImgElem({
  parent: menuElem,
  src: "/study/21.plan/240610/acalive/logo.png",
});

// const subscribeElem = new DivElem({
//   innerHTML: "구독 채널",
//   parent: menuElem,
// });

new ChannelBtn({
  name: "구독 채널",
  btns: [{ name: "명조 채널" }, { name: "블루아카이브 채널" }],
  parent: menuElem,
});

new ChannelBtn({
  name: "주요 채널",
  btns: [{ name: "붕괴 채널" }, { name: "오늘 점심 채널" }],
  parent: menuElem,
});
// const primaryElem = new DivElem({
//   innerHTML: "주요 채널",
//   parent: menuElem,
// });
