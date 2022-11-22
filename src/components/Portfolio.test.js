import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Portfolio from "./Portfolio";

describe("render component Portfolio", () => {
  test("Portfolio renders correctly", () => {
    render(<Portfolio />);
    expect(screen.getByText(/project 1/i)).toBeInTheDocument();
    const portfolioProjects = screen.getAllByText(/view resource/i);
    expect(portfolioProjects.length).toBeGreaterThan(3);
  });
  test("Isotope works correctly", () => {
    render(<Portfolio />);
    const buttons = screen.queryAllByRole("button");
    expect(buttons[0]).toHaveClass("is-checked");

    const filterButton = screen.getByText(/code/i);
    fireEvent.click(filterButton);

    const portfolioProjects = screen.getAllByText(/view resource/i);
    expect(portfolioProjects.length).toBe(4);
  });
});
