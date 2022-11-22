import SkillsForm from "./SkillsForm";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("render component SkillForm", () => {
  test("Skillform skill and range inputs works", () => {
    render(
      <Provider store={store}>
        <SkillsForm />
      </Provider>
    );

    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByTestId("input-skill"), "React");
    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument();

    expect(screen.queryByDisplayValue(/80/)).toBeNull();
    userEvent.type(screen.getByTestId("input-range"), "80");
    expect(screen.getByDisplayValue("80")).toBeInTheDocument();
  });

  //   test("Skillform skill/range validations works with !values", () => {
  //     render(
  //       <Provider store={store}>
  //         <SkillsForm />
  //       </Provider>
  //     );

  //     expect(screen.queryByText(/skill name must/i)).not.toBeInTheDocument();
  //     userEvent.type(screen.getByTestId("input-skill"), "");
  //     userEvent.tab();
  //     expect(screen.getByText(/name is a required/i)).toBeInTheDocument();

  //     expect(screen.queryByText(/skill range must/i)).not.toBeInTheDocument();
  //     userEvent.type(screen.getByTestId("input-range"), "");
  //     userEvent.tab();
  //     expect(screen.getByText(/range is a required/i)).toBeInTheDocument();
  //   });

  //   test("Skillform skill/range validations works with wrong type-text values", () => {
  //     render(
  //       <Provider store={store}>
  //         <SkillsForm />
  //       </Provider>
  //     );

  //     expect(screen.queryByText(/skill name must/i)).not.toBeInTheDocument();
  //     userEvent.type(screen.getByTestId("input-skill"), "1");
  //     userEvent.tab();
  //     expect(screen.getByText(/skill name must/i)).toBeInTheDocument();

  //     expect(screen.queryByText(/skill range must/i)).not.toBeInTheDocument();
  //     userEvent.type(screen.getByTestId("input-range"), "ert");
  //     userEvent.tab();
  //     expect(screen.getByText(/skill range must/i)).toBeInTheDocument();
  //   });

  //   test("Skillform range validation works with <10 value", () => {
  //     render(
  //       <Provider store={store}>
  //         <SkillsForm />
  //       </Provider>
  //     );

  //     expect(
  //       screen.queryByText(/range must be greater/i)
  //     ).not.toBeInTheDocument();
  //     userEvent.type(screen.getByTestId("input-range"), "5");
  //     userEvent.tab();
  //     expect(screen.getByText(/range must be greater/i)).toBeInTheDocument();
  //   });

  //   test("Skillform range validation works with >100 value", () => {
  //     render(
  //       <Provider store={store}>
  //         <SkillsForm />
  //       </Provider>
  //     );

  //     expect(screen.queryByText(/range must be less/i)).not.toBeInTheDocument();
  //     userEvent.type(screen.getByTestId("input-range"), "101");
  //     userEvent.tab();
  //     expect(screen.getByText(/range must be less/i)).toBeInTheDocument();
  //   });
});
