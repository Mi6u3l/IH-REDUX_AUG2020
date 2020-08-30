import { SET_LOGGED_USER } from "../actions/actionTypes";

/*const initialState = {
  username: 'Miguel',
  type: 'Admin'
}*/

export default function loggedUser(state = {}, action) {
  switch (action.type) {
    case SET_LOGGED_USER:
      return action.user
    default:
      return state;
  }
}