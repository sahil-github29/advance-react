import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // it checks if the App has only 1 CommentBox component
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  // it checks if the App has only 1 CommentList component
  expect(wrapped.find(CommentList).length).toEqual(1);
});
