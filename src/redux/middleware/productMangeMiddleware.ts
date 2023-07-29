import { Middleware } from "redux";
import { ProductTypes, RootState } from "../../types";
import {
  ADD_TO_CART,
  DELETE_PRODUCT,
  REMOVE_QUALITY_FROM_CART,
} from "../features/cart/actionTypes";
import {
  removeQuantity,
  addManyQuantity,
  addQuantity,
} from "../features/product/actions";

type ActionTypes =
  | { type: typeof REMOVE_QUALITY_FROM_CART; payload: ProductTypes }
  | { type: typeof ADD_TO_CART; payload: ProductTypes }
  | { type: typeof DELETE_PRODUCT; payload: ProductTypes };

const productManageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: ActionTypes) => {
    switch (action.type) {
      case ADD_TO_CART:
        store.dispatch(removeQuantity(action.payload));
        return next(action);

      case REMOVE_QUALITY_FROM_CART:
        store.dispatch(addQuantity(action.payload));
        return next(action);

      case DELETE_PRODUCT:
        store.dispatch(addManyQuantity(action.payload));
        return next(action);

      default:
        return next(action);
    }
  };
export default productManageMiddleware;
