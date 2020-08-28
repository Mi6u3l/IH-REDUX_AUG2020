import { ADD_TODO, TOGGLE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "./actionTypes";
import { getTodos, saveTodo, deleteTodo, updateTodo } from "../utils/api";

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function addTodoAction(todo) {
    return {
      type: ADD_TODO,
      todo,
    }
  }

export function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
  }

export function toggleTodoAction(todo) {
    return {
        type: TOGGLE_TODO,
        todo,
    }
  }

  export function getTodosFromAPI() {
    return dispatch => {
      return getTodos()
        .then(responseFromAPI => {
          dispatch(receiveTodos(responseFromAPI));
        })
    };
  }
  
  export function addTodoToAPI(todo) {
    return dispatch => {
      return saveTodo(todo)
        .then(responseFromAPI => {
          dispatch(addTodoAction(responseFromAPI));
        })
    };
  }
  
  export function removeTodoFromAPI(id) {
    return dispatch => {
      return deleteTodo(id)
        .then(() => {
          dispatch(removeTodoAction(id));
        })
    };
  }
  
  export function toggleTodoOnAPI(todo) {
    return dispatch => {
      return updateTodo(todo)
        .then(() => {
          dispatch(toggleTodoAction(todo));
        })
    };
  }