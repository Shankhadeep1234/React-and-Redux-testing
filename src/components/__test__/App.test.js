import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("should shows the comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("should shows the comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
