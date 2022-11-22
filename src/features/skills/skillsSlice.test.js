import reducer, {
  changeVisibility,
  fulfilledData,
  errorData,
  addStorage,
  addSkills,
} from "./skillsSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    skills: [],
    status: "loading",
    skillsIsOpen: false,
  });
});

test("should change state status after fulfilled data", () => {
  const previousState = {
    skills: [],
    status: "loading",
    skillsIsOpen: false,
  };
  expect(reducer(previousState, fulfilledData())).toEqual({
    skills: [],
    status: "fulfilled",
    skillsIsOpen: false,
  });
});
test("should change state status after click the button /open edit/", () => {
  const previousState = {
    skills: [],
    status: "fulfilled",
    skillsIsOpen: false,
  };
  expect(reducer(previousState, changeVisibility())).toEqual({
    skills: [],
    status: "fulfilled",
    skillsIsOpen: true,
  });
});
test("should change state status after error", () => {
  const previousState = {
    skills: [],
    status: "fulfilled",
    skillsIsOpen: true,
  };
  expect(reducer(previousState, errorData())).toEqual({
    skills: [],
    status: "error",
    skillsIsOpen: true,
  });
});

test("should change state skills array after fetching initial data", () => {
  const previousState = {
    skills: [],
    status: "error",
    skillsIsOpen: true,
  };
  expect(
    reducer(
      previousState,
      addStorage([
        { skill: "HTML", range: 80 },
        { skill: "CSS", range: 70 },
      ])
    )
  ).toEqual({
    skills: [
      { skill: "HTML", range: 80 },
      { skill: "CSS", range: 70 },
    ],
    status: "error",
    skillsIsOpen: true,
  });
});

test("should change state skills array after adding skill", () => {
  const previousState = {
    skills: [
      { skill: "HTML", range: 80 },
      { skill: "CSS", range: 70 },
    ],
    status: "error",
    skillsIsOpen: true,
  };
  expect(
    reducer(previousState, addSkills({ skill: "Figma", range: 30 }))
  ).toEqual({
    skills: [
      { skill: "HTML", range: 80 },
      { skill: "CSS", range: 70 },
      { skill: "Figma", range: 30 },
    ],
    status: "error",
    skillsIsOpen: true,
  });
});
