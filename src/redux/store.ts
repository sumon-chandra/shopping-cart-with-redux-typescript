import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import productManageMiddleware from "./middleware/productMangeMiddleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productManageMiddleware))
);
export default store;
