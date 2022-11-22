import { render, screen } from "@testing-library/react";
import React from "react";
import Navigation from "./Navigation";
import { dataNavigation } from "../components/dataComponents";

describe("render component Navigation", () => {
  test("Navigation renders with empty array data", () => {
    render(<Navigation data={[]} />);
    expect(screen.queryByText(/education/i)).not.toBeInTheDocument();
  });

  test("Feedback renders with data props", () => {
    const activeId = "feedbacks";
    render(<Navigation data={dataNavigation} activeId={activeId} />);
    expect(screen.getByText(/feedbacks/i)).toBeInTheDocument();
  });
});
