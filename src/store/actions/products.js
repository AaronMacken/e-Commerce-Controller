import { apiCall } from "../../services/api";
import { addError } from "./error";
import { LOAD_PRODUCTS, UPDATE_PRODUCT, DELETE_PRODUCT } from "../actionTypes";

// action creators
export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  products
});

export const update = id => ({
  type: UPDATE_PRODUCT,
  id
});

export const remove = id => ({
  type: DELETE_PRODUCT,
  id
});

export const createProduct = productData => {
  return dispatch => {
    return apiCall("post", `/products`, { productData })
      .then(res => {})
      .catch(err => dispatch(addError(err.message)));
  };
};

export const fetchProducts = () => {
  return dispatch => {
    return apiCall("get", "/products")
      .then(products => {
        dispatch(loadProducts(products));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const updateProduct = product_id => {
  return dispatch => {
    return apiCall(`put", "/products/${product_id}`)
      .then(res => {})
      .catch(err => dispatch(addError(err.message)));
  };
};

export const deleteProduct = product_id => {
  return dispatch => {
    return apiCall("delete", `/products/${product_id}`)
      .then(() => dispatch(remove(product_id)))
      .catch(err => dispatch(addError(err.message)));
  };
};
