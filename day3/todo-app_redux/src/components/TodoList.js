import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeTodoAction, toggleTodoAction } from "../actions/todos";

class TodoList extends Component {

 removeTodo = (todoId) => {
    this.props.handleRemoveTodo(todoId);
 }

 toggleTodo = (todo) => {
  todo.completed = !todo.completed;
  this.props.handleToggleTodo(todo);
}
    
  render() {
    return (
      <ul>
        {this.props.todos.map((todo)=>{
          return <li key={todo.id}>
          <span 
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
            onClick={() => this.toggleTodo(todo)}>
            {todo.name}
          </span>
          <button onClick={() => this.removeTodo(todo.id)}>X</button>
          </li>
        })}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    handleRemoveTodo: id => dispatch(removeTodoAction(id)),
    handleToggleTodo: todo => dispatch(toggleTodoAction(todo))
});

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
