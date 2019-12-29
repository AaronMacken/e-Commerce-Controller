import { LOAD_PRODUCTS, LOAD_PRODUCT, DELETE_PRODUCT } from "../actionTypes";

export const products = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.products];
    case DELETE_PRODUCT:
      return state.filter(product => product._id !== action.id);
    default:
      return state;
  }
};

export default products;