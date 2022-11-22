import { render, screen } from "@testing-library/react";
import Timeline from "./Timeline";
import { dataEducation, ids } from "./dataComponents";

describe("render component Timeline", () => {
  test("Timeline renders correctly when loading data", () => {
    let statusTimeline = "loading";
    render(
      <Timeline status={statusTimeline} data={dataEducation} id={ids[1]} />
    );
    expect(screen.queryByText("Title 0")).not.toBeInTheDocument();
    expect(screen.getByTestId("icon-contacts")).toBeInTheDocument();
  });
  test("Timeline renders correctly after successful loading data", () => {
    let statusTimeline = "fulfilled";
    render(
      <Timeline status={statusTimeline} data={dataEducation} id={ids[1]} />
    );
    expect(screen.getByText("Title 0")).toBeInTheDocument();
    expect(screen.queryByTestId("icon-contacts")).not.toBeInTheDocument();
    expect(screen.queryByText(/Something went wrong/i)).not.toBeInTheDocument();
  });
  test("Timeline renders after unsuccessful loading data", () => {
    let statusTimeline = "error";
    render(
      <Timeline status={statusTimeline} data={dataEducation} id={ids[1]} />
    );
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
});
