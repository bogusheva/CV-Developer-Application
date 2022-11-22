import { render, screen } from "@testing-library/react";
import React from "react";
import Feedback from "./Feedback";
import { dataFeedbacks, ids } from "../components/dataComponents";

describe("render component Feedback", () => {
  test("Feedback renders with empty array data", () => {
    render(<Feedback data={[]} id={ids[6]} />);
    expect(screen.queryByText(/Jane Doe/)).not.toBeInTheDocument();
  });

  test("Feedback renders with data props", () => {
    render(<Feedback data={dataFeedbacks} id={ids[6]} />);
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
  });
});
