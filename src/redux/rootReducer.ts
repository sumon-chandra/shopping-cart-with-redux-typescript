import { combineReducers } from "redux";
import productReducer from "./features/product/productReducer";
import { RootState } from "../types";
import cartReducer from "./features/cart/cartReducer";

const rootReducer = combineReducers<RootState>({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
