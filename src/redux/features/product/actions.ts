import { ProductTypes } from "../../../types";
import {
  ADD_NEW_PRODUCT,
  ADD_MANY_QUANTITY,
  ADD_QUANTITY_FROM_PRODUCT,
  REMOVE_QUANTITY_FROM_PRODUCT,
} from "./actionTypes";

export const addNewProduct = (product: ProductTypes) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: product,
  };
};

export const removeQuantity = (product: ProductTypes) => {
  return {
    type: REMOVE_QUANTITY_FROM_PRODUCT,
    payload: product,
  };
};

export const addQuantity = (product: ProductTypes) => {
  return {
    type: ADD_QUANTITY_FROM_PRODUCT,
    payload: product,
  };
};

export const addManyQuantity = (product: ProductTypes) => {
  return {
    type: ADD_MANY_QUANTITY,
    payload: product,
  };
};
