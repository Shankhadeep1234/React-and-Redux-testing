import commentsReducer from "../comments.reducer";
import { SAVE_COMMENT } from "../../actions/types";

it("handle actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };
  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New comment"]);
});

it("handle actions with unknown types", () => {
  const newState = commentsReducer([], { type: "hhejekheuii" });

  expect(newState).toEqual([]);
});
