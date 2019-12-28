import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, // will be true when user logs in
  user: {} // all user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // checks to see if the object has keys
        // (acting as a boolean value for user data being present)
        isAuthenticated: Object.keys(action.user).length > 0,
        user: action.user
      };
    default:
      return state;
  }
};
