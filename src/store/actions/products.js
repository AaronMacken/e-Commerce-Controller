import { apiCall } from "../../services/api";
import { addError } from "./error";
import { LOAD_PRODUCTS, DELETE_PRODUCT } from "../actionTypes";

// action creators
export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  products
});

export const remove = id => ({
  type: DELETE_PRODUCT,
  id
});

export const deleteProduct = (product_id) => {
  return dispatch => {
    return apiCall("delete", `/products/${product_id}`)
      .then(() => dispatch(remove(product_id)))
      .catch(err => dispatch(addError(err.message)));
  };
};

// redux thunk - function that returns a dispatch
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


export const postNewMessage = text => (dispatch, getState) => {
//   let { currentUser } = getState();

//   const id = currentUser.user.id;

  // use that id in the api call
  return apiCall("post", `/products`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
