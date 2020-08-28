import { ADD_TODO, TOGGLE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/actionTypes";

const initialState = [
  { id: "zejldcs6zpkebjjvjr", name: "Walk the dog"},
  { id: "ums8j0t5559kebjkoho", name: "Buy groceries"}
]

export default function todos(state = [], action) {
    switch(action.type) {
      case RECEIVE_TODOS: 
        return action.todos;
      case ADD_TODO:
        return state.concat([action.todo])
      case TOGGLE_TODO:
        return state.map(todo =>
          todo._id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
      case REMOVE_TODO:
        return state.filter((todo) => todo._id !== action.id)
      default:
        return state
    }
  }