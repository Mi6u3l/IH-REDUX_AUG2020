import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./actionTypes";

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