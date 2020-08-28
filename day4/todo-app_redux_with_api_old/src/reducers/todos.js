import { ADD_TODO, TOGGLE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/actionTypes";

export default function todos(state = [], action) {
    switch(action.type) {
      case RECEIVE_TODOS: 
        console.log('Prepare to recieve todos', state);
        console.log('todos gotten', state.concat(action.todos));
        return action.todos
      case ADD_TODO:
          console.log('Prepare to add todo', state);
          console.log('todo added', state.concat([action.todo]));
        return state.concat([action.todo])
      case REMOVE_TODO:
        console.log('Prepare to remove todo', state);
        console.log('todo removed', state.filter((todo) => todo._id !== action.id));
        return state.filter((todo) => todo._id !== action.id)
      case TOGGLE_TODO:
        console.log('Prepare to toggle todo', state);
        console.log('todo toggled', state.map(todo =>
          todo._id === action.id ? { ...todo, completed: !todo.completed } : todo
        ));
        return state.map(todo =>
          todo._id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }