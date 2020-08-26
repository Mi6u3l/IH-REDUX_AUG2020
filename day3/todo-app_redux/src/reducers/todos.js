import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../actions/actionTypes";

const initialState = [
  { id: "zejldcs6zpkebjjvjr", name: "Walk the dog"},
  { id: "ums8j0t5559kebjkoho", name: "Buy groceries"}
]

export default function todos(state = initialState, action) {
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