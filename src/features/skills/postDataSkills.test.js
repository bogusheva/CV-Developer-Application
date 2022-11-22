import { postData } from "./postDataSkills";

const data = { skill: "HTML", range: 80 };

describe("post request tests", () => {
  test("post correct data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
    const mockDispatch = jest.fn();
    postData()(mockDispatch);
    await new Promise(process.nextTick);
    expect(data).toEqual({
      skill: "HTML",
      range: 80,
    });
  });

  test("post request catch error", async () => {
    await expect(postData()).rejects.toThrow(
      "Problems with server connection!"
    );
  });
});
