import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../Component/TodoList";

describe("test Todo List", () => {
  beforeEach(() => {
    render(<TodoList />);
  });
  test("render Todo List", () => {
    // render(<TodoList />);
    const titleElem = screen.getByText(/Todo List/i); //----> 제목이 있는지 확인
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("H1"); //---> 태그가 h1 인지 확인
  });

  test("include input Element", () => {
    // render(<TodoList />);
    const inputElem = screen.getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
  });

  test("input text", () => {
    // render(<TodoList />);
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "input test" } });
    expect(inputElem.value).toEqual("input test");
  });

  test("include Add button", () => {
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    expect(buttonElem).toBeInTheDocument();
  });

  test("Add New Todo", () => {
    const buttonELem = screen.getByRole("button", { name: "Add Todo" });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "first todo" } });
    fireEvent.click(buttonELem);

    const listElem = screen.getByText("first todo");
    expect(listElem).toBeInTheDocument();
    expect(listElem.tagName).toBe("LI");

    const listItemElem2 = screen.getByRole("listitem");
    expect(listItemElem2).toHaveTextContent("first todo");
  });

  test("test Todolist", () => {
    const buttonELem = screen.getByRole("button", { name: "Add Todo" });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    const Add: string[] = ["cat", "dog", "bird"];

    Add.forEach((item: string) => {
      fireEvent.change(inputElem, { target: { value: item } });
      fireEvent.click(buttonELem);
    });

    const ul = screen.getByRole("list");
    const lilist = ul.children;

    for (let i: number = 0; i < lilist.length; i++) {
      const listElem = screen.getByText(Add[i]);
      expect(listElem).toBeInTheDocument();
    }
  });
});
