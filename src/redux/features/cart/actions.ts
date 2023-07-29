import { ProductTypes } from "../../../types";
import {
  ADD_TO_CART,
  DELETE_PRODUCT,
  REMOVE_QUALITY_FROM_CART,
} from "./actionTypes";

export const addToCart = (product: ProductTypes) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeCartQuantity = (product: ProductTypes) => {
  return {
    type: REMOVE_QUALITY_FROM_CART,
    payload: product,
  };
};
export const deleteCartItem = (product: ProductTypes) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
