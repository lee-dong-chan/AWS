import MockAdapter from "axios-mock-adapter";

import instance from "./axios";

import { addTodo, getList } from "./todoAxios";
const mock = new MockAdapter(instance);

describe("Test todo Axios", () => {
  test("get List", async () => {
    const data = [{ id: 1, title: "test todo list", isCompleted: false }];
    mock.onGet("/todo").reply(200, data);

    const response = await getList();
    expect(response).toEqual(data);
  });

  test("post add todo", async () => {
    const data = { id: 1, title: "test todo list", isCompleted: false };
    mock.onPost("/todo", { title: "test todo list" }).reply(201, data);

    const response = await addTodo({ title: "test todo list" });
    expect(response).toEqual(data);
  });
});
