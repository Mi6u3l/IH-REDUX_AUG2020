import React, { Component } from 'react';

class TodoList extends Component {
    
  render() {
    return (
      <ul>
        {this.props.todos.map((todo)=>{
          return <li key={todo.id}>
          <span>
            {todo.name}
          </span>
          <button onClick={() => this.props.removeTodo(todo.id)}>X</button>
          </li>
        })}
      </ul>
    );
  }
}

export default TodoList;
