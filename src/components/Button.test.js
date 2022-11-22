import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import redux from "redux";
import Button from "./Button";
//import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { changeVisibility } from "../features/skills/skillsSlice";

describe("render component Button", () => {
  test("have an attribute", () => {
    render(<Button disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("disabled");
  });
  test("have icon component if pass prop-icon", () => {
    render(<Button icon={faChevronUp} />);
    const component = screen.getByTestId("icon");
    expect(component).toBeInTheDocument();
  });
});
