import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Panel from "./Panel";
import { dataNavigation } from "../components/dataComponents";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const createRouterWrapper =
  (history) =>
  ({ children }) =>
    <Router history={history}>{children}</Router>;

describe("render component Panel", () => {
  test("navigation to Home", () => {
    const history = createMemoryHistory();
    const activeId = "feedbacks";
    render(<Panel data={dataNavigation} activeId={activeId} />, {
      wrapper: createRouterWrapper(history),
    });
    fireEvent.click(screen.getByText("Go back"));
    expect(history.location.pathname).toBe("/");
  });
});
