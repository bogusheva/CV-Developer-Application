import { fetchDataSkills } from "./fetchDataSkills";
import { errorData } from "./skillsSlice";

const data = [
  {
    skill: "HTML",
    range: 80,
  },
  {
    skill: "CSS",
    range: 70,
  },
  {
    skill: "Figma",
    range: 30,
  },
];

describe("download from fetch", () => {
  test("download from correct url", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
    const mockDispatch = jest.fn();
    const expectedUrl = "api/skills";
    fetchDataSkills()(mockDispatch);
    await new Promise(process.nextTick);
    expect(global.fetch).toBeCalledWith(expectedUrl);
  });
  test("download correct data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
    const mockDispatch = jest.fn();
    fetchDataSkills()(mockDispatch);
    await new Promise(process.nextTick);
    expect(data).toEqual([
      {
        skill: "HTML",
        range: 80,
      },
      {
        skill: "CSS",
        range: 70,
      },
      {
        skill: "Figma",
        range: 30,
      },
    ]);
  });
  test("if get request ends with error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject(),
      })
    );
    const mockDispatch = jest.fn();
    fetchDataSkills()(mockDispatch);
    await new Promise(process.nextTick);
    expect(mockDispatch).toBeCalledWith(errorData());
  });
});
