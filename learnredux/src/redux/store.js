import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";

//We need to destructure the middleware.
const middleware = [thunk];

//Creating a store
const store = createStore(
  reducer,
  //This has to be wrapped with composeWithDevTools, so that we can view the dispatched actions in the browser with redux extension.
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
