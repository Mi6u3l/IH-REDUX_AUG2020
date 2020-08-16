import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./actionTypes";

export function addTodo(todo) {
    return {
      type: ADD_TODO,
      todo,
    }
  }

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
  }