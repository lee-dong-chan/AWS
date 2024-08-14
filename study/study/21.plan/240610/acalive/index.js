class Item {
  element;
  constructor({ title, commentCount, updateAt }) {
    this.element = document.createElement("li");
    this.element.classList.add("item");

    const aElem = document.createElement("a");
    aElem.innerHTML = `<span>${title}[${commentCount}]</span><span class="update-time">${updateAt}</span>`;
    this.element.append(aElem);
  }

  getTime(updateAt) {
    const now = Date.now();
    const updateTime = now - updateAt;
    if (updateTime > 24 * 60 * 60 * 1000) {
      return updateTime / (24 * 60 * 60 * 1000) + "일전";
    } else if (60 * 60 * 1000) {
      return updateTime / (60 * 60 * 1000) + "시간전";
    } else if (60 * 1000) {
      return updateTime / (60 * 1000) + "분전";
    } else {
      return updateTime / 1000 + "초전";
    }
  }
}

class Channel {
  element;
  constructor({ title, list }) {
    this.element = document.createElement("div");
    this.element.classList.add("channels");
    const titleAElem = document.createElement("a");
    const titleElem = document.createElement("h3");
    titleElem.innerHTML = title;
    titleAElem.append(titleElem);
    this.element.append(titleAElem);

    const listElem = document.createElement("ul");
    list.forEach((item) => {
      const instance = new Item(item);
      listElem.append(instance.element);
    });
    this.element.append(listElem);
  }
}

class Row {
  element;
  constructor({ list }) {
    this.element = document.createElement("div");
    this.element.classList.add("rows");
    list.forEach((item) => {
      this.element.append(new Channel(item).element);
    });
  }
}

document.getElementsByClassName("contents")[0].append(
  new Row({
    list: [
      {
        title: "명조채널",
        list: [
          {
            title: "각 보스별 취약속성 같은거 있음?",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "오늘의 보라왜가리 파밍은 망했다.",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "홀로그램 고릴라 5단계 1돌 올림 솔플",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "에코 파밍 진짜 힘드네",
            commentCount: 3,
            updateAt: Date.now() - 6 * 60 * 1000,
          },
        ],
      },
    ],
  }).element,
  new Row({
    list: [
      {
        title: "명조채널",
        list: [
          {
            title: "각 보스별 취약속성 같은거 있음?",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "오늘의 보라왜가리 파밍은 망했다.",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "홀로그램 고릴라 5단계 1돌 올림 솔플",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "에코 파밍 진짜 힘드네",
            commentCount: 3,
            updateAt: Date.now() - 6 * 60 * 1000,
          },
        ],
      },
    ],
  }).element,
  new Row({
    list: [
      {
        title: "명조채널",
        list: [
          {
            title: "각 보스별 취약속성 같은거 있음?",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "오늘의 보라왜가리 파밍은 망했다.",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "홀로그램 고릴라 5단계 1돌 올림 솔플",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "에코 파밍 진짜 힘드네",
            commentCount: 3,
            updateAt: Date.now() - 6 * 60 * 1000,
          },
        ],
      },
    ],
  }).element,
  new Row({
    list: [
      {
        title: "명조채널",
        list: [
          {
            title: "각 보스별 취약속성 같은거 있음?",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "오늘의 보라왜가리 파밍은 망했다.",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "홀로그램 고릴라 5단계 1돌 올림 솔플",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "에코 파밍 진짜 힘드네",
            commentCount: 3,
            updateAt: Date.now() - 6 * 60 * 1000,
          },
        ],
      },
    ],
  }).element
);

// document.getElementsByClassName("contnets")[0].append(channel.element);
