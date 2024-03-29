import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState);

  return <Provider store={store}>{children}</Provider>;
};
