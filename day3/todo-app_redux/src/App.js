import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions/todos";

class App extends Component {
  state = {
    newTodoName: ''
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  addNewTodo = (event) => { 
    event.preventDefault();
    let newTodo = {
      id: this.generateId(),
      name: this.state.newTodoName,
    }   

    this.props.handleAddTodo(newTodo);
    this.setState({newTodoName: ''});
  }

  removeTodo = (todoId) => {
    this.props.handleRemoveTodo(todoId);
  }

  generateId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addNewTodo}>
          <h1>Todo List</h1>
          <input id="todo" type="text" name="newTodoName" value={this.state.newTodoName} 
          onChange={this.handleChange} placeholder="Add Todo" />
          <input type="submit" value="Add Todo" />
        </form>
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleAddTodo: todo => dispatch(addTodo(todo)),
  handleRemoveTodo: id => dispatch(removeTodo(id)),
});

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);