import { render, screen } from "@testing-library/react";
import React from "react";
import BurgerPanel from "./BurgerPanel";

describe("renders BurgerPanel", () => {
  test("renders without any text", () => {
    render(<BurgerPanel />);
    const props = screen.queryByText(/[A-Z]/i);
    expect(props).not.toBeInTheDocument();
  });
});
