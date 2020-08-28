import { SET_LOGGED_USER } from "./actionTypes";

export function setLoggedUserAction(user) {
  return {
    type: SET_LOGGED_USER,
    user,
  }
}