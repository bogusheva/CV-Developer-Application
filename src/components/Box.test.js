import { render, screen } from "@testing-library/react";
import React from "react";
import Box from "./Box";

describe("pass correct props", () => {
  test("pass correct prop", () => {
    render(<Box title="About" />);
    const props = screen.getByText(/About/);
    expect(props.textContent).toBe("About");
  });
});
