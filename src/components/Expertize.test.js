import { fireEvent, render, screen } from "@testing-library/react";
import Expertize from "./Expertize";
import { ids } from "./dataComponents";
import { changeVisibility } from "../features/skills/skillsSlice";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({ useDispatch: () => mockDispatch }));

describe("render component Expertize", () => {
  afterEach(() => {
    mockDispatch.mockReset();
  });

  test("button works correctly open/close", () => {
    let statusSkills = "loading";
    let skills = [];
    let skillsIsOpen = false;
    render(
      <Expertize
        status={statusSkills}
        data={skills}
        skillsIsOpen={skillsIsOpen}
        id={ids[3]}
      />
    );
    expect(screen.getByText(/open edit/i)).toBeInTheDocument();
    const button = screen.getByTestId("button-test");
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith(changeVisibility());
  });

  test("Expertize renders correctly when loading data", () => {
    let statusSkills = "loading";
    let skills = [];
    let skillsIsOpen = false;
    render(
      <Expertize
        status={statusSkills}
        data={skills}
        skillsIsOpen={skillsIsOpen}
        id={ids[3]}
      />
    );
    expect(screen.queryByText("HTML")).not.toBeInTheDocument();
    expect(screen.getByTestId("icon-expertize")).toBeInTheDocument();
  });

  test("Expertize renders correctly after successful loading data", () => {
    let statusSkills = "fulfilled";
    let skills = [{ skill: "HTML", range: 80 }];
    let skillsIsOpen = true;
    render(
      <Expertize
        status={statusSkills}
        data={skills}
        skillsIsOpen={skillsIsOpen}
        id={ids[3]}
      />
    );
    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText(/close edit/i)).toBeInTheDocument();
    expect(screen.queryByTestId("icon-expertize")).not.toBeInTheDocument();
    expect(screen.queryByText(/Something went wrong/i)).not.toBeInTheDocument();
  });

  test("Expertize renders after unsuccessful loading data", () => {
    let statusSkills = "error";
    let skills = [];
    let skillsIsOpen = false;
    render(
      <Expertize
        status={statusSkills}
        data={skills}
        skillsIsOpen={skillsIsOpen}
        id={ids[3]}
      />
    );
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
});
