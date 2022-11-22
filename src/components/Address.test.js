import { render, screen } from "@testing-library/react";
import React from "react";
import Address from "./Address";

describe("render correct data", () => {
  test("render email", () => {
    render(<Address />);
    const email = screen.getByText(/bogusheff@gmail.com/);
    expect(email).toHaveTextContent("bogusheff@gmail.com");
  });
  test("render h2", () => {
    render(<h2>Contacts</h2>);
    expect(screen.getByText("Contacts")).toBeInTheDocument();
  });
  test("render phone number", () => {
    render(
      <div className="contacts-data">
        <a href="tel:+380984376036">
          <b>+380984376036</b>
        </a>
      </div>
    );
    expect(screen.getByText("+380984376036")).toBeInTheDocument();
  });
});
