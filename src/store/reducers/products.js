import {
  CREATE_PRODUCT,
  LOAD_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "../actionTypes";

export const products = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.products];
    case CREATE_PRODUCT:
      return [...state, action.product];
    case UPDATE_PRODUCT:
      let updatedProducts = state.products.map(product => {
        if (product._id === action.product._id) {
          product = action.product;
          return product;
        }
        return product;
      });
      return updatedProducts;
    case DELETE_PRODUCT:
      return state.filter(product => product._id !== action.id);
    default:
      return state;
  }
};

export default products;
