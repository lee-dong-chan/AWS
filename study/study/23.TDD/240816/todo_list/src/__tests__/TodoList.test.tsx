import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mock = new MockAdapter(instance);
const client = new QueryClient();

import TodoList from "../Component/TodoList";
import instance from "../lib/axios";

describe("test Todo List", () => {
  beforeEach(() => {
    const data = { id: 1, title: "test todo list", isComplete: false };
    mock.onGet("/todo").reply(200, [data]);
    mock.onPost("/todo", { title: "first Todo" }).reply(200, data);
    render(
      <QueryClientProvider client={client}>
        <TodoList />
      </QueryClientProvider>
    );
  });

  test("render Todo List", async () => {
    // render(<TodoList />);
    const titleElem = screen.getByText(/now Loading/i); //----> 제목이 있는지 확인
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("DIV"); //---> 태그가 h1 인지 확인

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    expect(screen.getByText(/test todo list/i)).toBeInTheDocument();
  });

  test("Include Input Element", async () => {
    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem = screen.getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
  });

  test("Input Text", async () => {
    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "input test" } });
    expect(inputElem.value).toEqual("input test");
  });

  test("Include Add Button", () => {
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    expect(buttonElem).toBeInTheDocument();
  });

  test("Add New Todo", async () => {
    // 작성해보자
    const data = { id: 1, title: "test todo list", isCompleted: false };
    mock
      .onGet("/todo")
      .reply(200, [data, { id: 1, title: "first Todo", isCompleted: false }]);
    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "first Todo" } });
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.click(buttonElem);

    await waitFor(() => {
      expect(screen.getByText("first Todo")).toBeInTheDocument();
    });
    const listItemElem = screen.getByText("first Todo");
    expect(listItemElem).toBeInTheDocument();
    expect(listItemElem.tagName).toBe("LI");
  });

  //   test("test Todolist", () => {
  //     const buttonELem = screen.getByRole("button", { name: "Add Todo" });
  //     const inputElem: HTMLInputElement = screen.getByRole("textbox");
  //     const Add: string[] = ["cat", "dog", "bird"];

  //     Add.forEach((item: string) => {
  //       fireEvent.change(inputElem, { target: { value: item } });
  //       fireEvent.click(buttonELem);
  //     });

  //     const ul = screen.getByRole("list");
  //     const lilist = ul.children;

  //     for (let i: number = 0; i < lilist.length; i++) {
  //       const listElem = screen.getByText(Add[i]);
  //       expect(listElem).toBeInTheDocument();
  //     }
  //   });
});
