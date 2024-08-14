import { createContext } from "react";

export interface ITodo {
  num: number;
  content: string;
  priority: number;
  createdAt: string;
  limit: string;
}
export interface ITodoContext {
  list: ITodo[];
  addList: (todo: ITodo) => void;
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined);
//createContest=>BrowserRouter 같이 컴포넌트를 하나 생성해준다.(provider)
//provider 컴포넌트의 자식들에서는 해당 훅(context)를 사용할 수 있다.
