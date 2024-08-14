import { atom, selector } from "recoil";
export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}
//atom:state
export const todoListState = atom<ITodo[]>({
  key: "todoListState",
  default: [],
});
// initialState
// useState랑 사용법이 거의 흡사함

const todoFilterState = atom<string>({
  key: "todoFilterState",
  default: "all",
});

export const todoFilter = selector<string>({
  key: "todoFilter",
  get: ({ get }) => {
    return get(todoFilterState);
  },
  set: ({ set }, value = "all") => {
    set(todoFilterState, value);
  },
});
//getter get:() setter set:()

//Selector :reducer+action ?
export const todoCount = selector<number>({
  key: "todoCount",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilter);
    switch (filter) {
      case "complete":
        return list.filter((item) => item.isComplete).length;
      case "progress":
        return list.filter((item) => !item.isComplete).length;
      case "all":
      default:
        return list.length;
    }
  },
});

export const todoList = selector<ITodo[]>({
  key: "todoList",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilter);
    switch (filter) {
      case "complete":
        return list.filter((item) => item.isComplete);
      case "progress":
        return list.filter((item) => !item.isComplete);
      case "all":
      default:
        return list;
    }
  },
});
