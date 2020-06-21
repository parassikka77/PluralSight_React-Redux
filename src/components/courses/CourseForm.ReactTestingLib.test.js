import React from "react";
import { cleanup, render } from "@testing-library/react";
import CourseForm from "./CourseForm";

//cleanup runs after each test

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

//it simply searches for the component in the final user output
//less precise but also less work here
//don't have to use expect
//debugging is better

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
