import { ProductTypes } from "../../../types";
import {
  ADD_MANY_QUANTITY,
  ADD_NEW_PRODUCT,
  REMOVE_QUANTITY_FROM_PRODUCT,
} from "./actionTypes";
import initialState from "./initialState";
type ActionType =
  | { type: typeof ADD_NEW_PRODUCT; payload: ProductTypes }
  | { type: typeof REMOVE_QUANTITY_FROM_PRODUCT; payload: ProductTypes }
  | { type: typeof ADD_MANY_QUANTITY; payload: ProductTypes };

const productReducer = (state = initialState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_PRODUCT:
      const { title, category, image, price, quantity, id } = payload;
      return [...state, { id, title, category, image, price, quantity }];

    case REMOVE_QUANTITY_FROM_PRODUCT:
      if (payload.quantity <= 0) {
        return state;
      } else {
        return [...state].map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

    case ADD_MANY_QUANTITY:
      return [...state].map((item) =>
        item.id === payload.id
          ? { quantity: item.quantity + payload.quantity }
          : item
      );
    default:
      return state;
  }
};
export default productReducer;
