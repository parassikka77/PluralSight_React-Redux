import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../tools/mockData";

//write the test with it //test001
it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()} //creates and empty mock function
      onChange={jest.fn()}
      saving //saving prop {true}
    />
  );

  expect(tree).toMatchSnapshot();
});

//write the test with it //test002
it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()} //creates and empty mock function
      onChange={jest.fn()}
      saving={false} //saving prop {true}
    />
  );

  expect(tree).toMatchSnapshot();
});
