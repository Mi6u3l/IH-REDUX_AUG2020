import { combineReducers } from "redux";
import todos from "./todos";
import loggedUser from "./loggedUser";

export default combineReducers({
    todos,
    loggedUser
  });