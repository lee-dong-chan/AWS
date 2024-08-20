import MockAdapter from "axios-mock-adapter";

import instance from "./axios";

const mock = new MockAdapter(instance);

describe("Test Axios", () => {
  test("Get /api", async () => {
    const data = "Now Testing";

    mock.onGet("/api").reply(200, data);

    const response = (await instance.get("/api")).data;
    expect(response).toBe("Now Testing");
  });
});
