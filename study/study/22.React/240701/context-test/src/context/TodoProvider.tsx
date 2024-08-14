import {
  useReducer,
  Dispatch,
  createContext,
  ReactNode,
  useContext,
} from "react";

export interface Todo {
  title: string;
  id: number;
  content: string;
  isComplete: boolean;
}

export interface TodoListState {
  todoList: Todo[];
}
// store에 무엇이 있는지

const initialState: TodoListState = {
  todoList: [],
};
//initialize:초기화 / initialState:초기값

type Action =
  | {
      type: "ADDTODO"; //--> 해당 스트링만 들어감
      // payload: Todo; //데이터 -->무슨 Todo를 받는지 알수없기때문에 타입만 등록
      payload: { title: string; content: string };
    }
  | {
      type: "REMOVETODO";
      payload: { id: number };
    }
  | {
      type: "TOGGLETODO";
      payload: { id: number };
    };

// interface Action2 {
//   type: "ADDTODO" | "REMOVETODO" | "TOGGLETODO";
//   payload: Todo;
// }
let nowId = 0;
const reducer = (state: TodoListState, action: Action): TodoListState => {
  switch (action.type) {
    case "ADDTODO":
      nowId++;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { ...action.payload, id: nowId, isComplete: false },
        ],
      };
    case "REMOVETODO":
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo: Todo) => todo.id !== action.payload.id
        ),
      };
    case "TOGGLETODO":
      return {
        ...state,
        todoList: state.todoList.map((todo: Todo) => {
          if (todo.id !== action.payload.id) return todo;
          else return { ...todo, isComplete: !todo.isComplete };
        }),
      };
    default:
      return state;
  }

  //   if (action.type == "ADDTODO") {
  //     return { ...state, todoList: [...state.todoList, action.payload] };
  //   }
  //   if (action.type == "REMOVETODO") {
  //     return {
  //       ...state,
  //       todoList: state.todoList.filter(
  //         (todo: Todo) => todo.id !== action.payload.id
  //       ),
  //     };
  //   }
  //   if (action.type == "TOGGLETODO") {
  //     return {
  //       ...state,
  //       todoList: state.todoList.map(
  //         (todo: Todo) => {
  //             if(todo.id.payload.id)return Todo; else return{...todo,isComplete:!todo.isComplete}}
  //       ),
  //     };
  //   }

  //   return state;
};
interface TodoContextProps {
  state: TodoListState;
  dispatch: Dispatch<Action>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("now loading");
  }
  return context;
};

export default TodoContext;
