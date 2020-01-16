import { apiCall } from "../../services/api";
import { addError } from "./error";
import {
  CREATE_PRODUCT,
  LOAD_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "../actionTypes";

// action creators
export const handleAdd = product => ({
  type: CREATE_PRODUCT,
  product
});

export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  products
});

export const handleUpdate = product => ({
  type: UPDATE_PRODUCT,
  product
});

export const remove = id => ({
  type: DELETE_PRODUCT,
  id
});

export const createProduct = (productData) => {
  return dispatch => {
    return apiCall("post", `/api/products`, productData)
      .then(productData => {
        dispatch(handleAdd(productData));
      })
      .catch(err => dispatch(addError(err.message)));
  };
};

export const fetchProducts = () => {
  return dispatch => {
    return apiCall("get", "/api/products")
      .then(products => {
        dispatch(loadProducts(products));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const updateProduct = (path, payload) => {
  return dispatch => {
    return apiCall("put", `/api/products/${path}`, { payload })
      .then(updatedProduct => dispatch(handleUpdate(updatedProduct)))
      .catch(err => dispatch(addError(err.message)));
  };
};

export const deleteProduct = product_id => {
  return dispatch => {
    return apiCall("delete", `/api/products/${product_id}`)
      .then(() => dispatch(remove(product_id)))
      .catch(err => dispatch(addError(err.message)));
  };
};
