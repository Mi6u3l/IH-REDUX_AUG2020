import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/actionTypes";

const initialState = [
  { id: "zejldcs6zpkebjjvjr", name: "Walk the dog"},
  { id: "ums8j0t5559kebjkoho", name: "Buy groceries"}
]

export default function todos(state = initialState, action) {
    switch(action.type) {
      case ADD_TODO:
        return state.concat([action.todo])
      case TOGGLE_TODO:
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
      case REMOVE_TODO:
        return state.filter((todo) => todo.id !== action.id)
      default:
        return state
    }
  }