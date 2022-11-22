import reducer, {
  educationFetch,
  fulfilledData,
  errorData,
} from "./educationSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    educations: [],
    status: "loading",
  });
});

test("should change state status after fulfilled data", () => {
  const previousState = {
    educations: [],
    status: "loading",
  };
  expect(reducer(previousState, fulfilledData())).toEqual({
    educations: [],
    status: "fulfilled",
  });
});
test("should change state status after error", () => {
  const previousState = {
    educations: [],
    status: "fulfilled",
  };
  expect(reducer(previousState, errorData())).toEqual({
    educations: [],
    status: "error",
  });
});
test("should change state educations array after adding data", () => {
  const previousState = {
    educations: [],
    status: "error",
  };
  expect(
    reducer(
      previousState,
      educationFetch([
        {
          date: 2017,
          title: "Title 2",
          text: "Labore esse tempor nisi non mollit",
        },
      ])
    )
  ).toEqual({
    educations: [
      {
        date: 2017,
        title: "Title 2",
        text: "Labore esse tempor nisi non mollit",
      },
    ],
    status: "error",
  });
});
