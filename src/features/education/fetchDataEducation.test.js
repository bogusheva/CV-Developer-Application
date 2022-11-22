import { errorData } from "./educationSlice";
import { fetchData } from "./fetchDataEducation";

const data = [
  {
    date: 2017,
    title: "Title 2",
    text: "Labore esse tempor nisi non mollit enim ",
  },
  {
    date: 2014,
    title: "Title 0",
    text: "Elit voluptate ad nostrud laboris",
  },
];

describe("download fetch data", () => {
  test("download with correct url", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
    const mockDispatch = jest.fn();
    const expectedUrl = "api/educations";
    fetchData()(mockDispatch);
    await new Promise(process.nextTick);
    expect(global.fetch).toBeCalledWith(expectedUrl);
  });
  test("download with correct data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
    const mockDispatch = jest.fn();
    fetchData()(mockDispatch);
    await new Promise(process.nextTick);
    expect(data).toEqual([
      {
        date: 2017,
        title: "Title 2",
        text: "Labore esse tempor nisi non mollit enim ",
      },
      {
        date: 2014,
        title: "Title 0",
        text: "Elit voluptate ad nostrud laboris",
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
    fetchData()(mockDispatch);
    await new Promise(process.nextTick);
    expect(mockDispatch).toBeCalledWith(errorData());
  });
});
