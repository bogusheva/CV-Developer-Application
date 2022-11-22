import { render, screen } from "@testing-library/react";
import React from "react";
import Experience from "./Experience";
import { dataExperience, ids } from "../components/dataComponents";

describe("render component Experience", () => {
  test("Experience renders", () => {
    render(<Experience data={dataExperience} id={ids[2]} />);
    expect(screen.getByText(/Google/)).toBeInTheDocument();
  });
  test("pass correct prop", () => {
    render(<Experience data={dataExperience} id={ids[2]} />);
    expect(
      screen.queryByText("tempor nisi non mollit enim")
    ).not.toBeInTheDocument();
  });
});
