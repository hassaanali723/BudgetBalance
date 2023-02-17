import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const loginUser = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const logoutUser = () => {
  console.log("here2");
  return {
    type: LOGOUT,
  };
};
