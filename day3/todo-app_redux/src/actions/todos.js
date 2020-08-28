import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes";

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