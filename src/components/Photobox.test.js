import { render, screen } from "@testing-library/react";
import React from "react";
import Photobox from "./Photobox";

describe("render component Navigation", () => {
  test("Photobox renders without props", () => {
    render(<Photobox />);
    expect(screen.queryByText(/john doe/i)).not.toBeInTheDocument();
  });

  test("Feedback renders with props", () => {
    render(
      <Photobox
        name="John Doe"
        class="photobox-main"
        title="Programmer. Creative. Innovator"
        description="Cum sociis natoque"
        avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      />
    );
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByAltText("frontend-developer")).toBeInTheDocument();
    const h2 = screen.getByTestId("h2");
    expect(h2).toHaveTextContent(/creative/i);
    const description = screen.getByTestId("description");
    expect(description).toHaveTextContent(/sociis natoque/);
  });
});
