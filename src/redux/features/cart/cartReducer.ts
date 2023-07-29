import { ProductTypes } from "./../../../types";
import {
  ADD_TO_CART,
  DELETE_PRODUCT,
  REMOVE_QUALITY_FROM_CART,
} from "./actionTypes";
type ActionTypes =
  | { type: typeof ADD_TO_CART; payload: ProductTypes }
  | { type: typeof REMOVE_QUALITY_FROM_CART; payload: ProductTypes }
  | { type: typeof DELETE_PRODUCT; payload: ProductTypes };

const initialState: ProductTypes[] = [];

const isExist = (state: ProductTypes[], payload: ProductTypes) => {
  return state.some((item) => item.id === payload.id);
};

const cartReducer = (state = initialState, action: ActionTypes) => {
  const { payload, type } = action;
  const copiedState = [...state];
  switch (type) {
    case ADD_TO_CART:
      if (isExist(state, payload)) {
        if (payload.quantity <= 0) {
          return state;
        }
        return copiedState.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity! + 1,
                quantity: item.quantity - 1,
              }
            : item
        );
      } else {
        copiedState.push({
          ...payload,
          cartQuantity: 1,
          quantity: payload.quantity - 1,
        });
        return copiedState;
      }

    case REMOVE_QUALITY_FROM_CART:
      if (payload.cartQuantity! > 1) {
        return copiedState.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity! - 1,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      return copiedState.filter((item) => item.id !== payload.id);

    case DELETE_PRODUCT:
      return copiedState.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
export default cartReducer;
