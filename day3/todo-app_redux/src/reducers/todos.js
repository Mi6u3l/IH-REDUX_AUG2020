import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../actions/actionTypes";

export default function todos(state = [], action) {
    switch(action.type) {
      case ADD_TODO:
          console.log('Prepare to add todo', state);
          console.log('todo added', state.concat([action.todo]));
        return state.concat([action.todo])
      case REMOVE_TODO:
        console.log('Prepare to remove todo', state);
        console.log('todo removed', state.filter((todo) => todo.id !== action.id));
        return state.filter((todo) => todo.id !== action.id)
      default:
        return state
    }
  }