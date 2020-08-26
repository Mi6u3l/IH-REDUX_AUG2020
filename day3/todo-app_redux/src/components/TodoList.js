import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeTodoAction } from "../actions/todos";

class TodoList extends Component {

 removeTodo = (todoId) => {
    this.props.handleRemoveTodo(todoId);
 }
    
  render() {
    return (
      <ul>
        {this.props.todos.map((todo)=>{
          return <li key={todo.id}>
          <span>
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
});

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
