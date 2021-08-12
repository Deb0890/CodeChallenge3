import { createStore, applyMiddleware } from "redux";

import { userData } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  userData,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
