import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { removeTodoFromAPI, addTodoToAPI, getTodosFromAPI, toggleTodoOnAPI } from "./actions/todos";

class App extends Component {
  state = {
    newTodoName: ''
  }

  componentDidMount() {
    this.props.handleRetrieveTodos();
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  addNewTodo = (event) => { 
    event.preventDefault();
    let newTodo = {
      name: this.state.newTodoName,
      completed: false
    }

    this.props.handleAddTodo(newTodo);
    this.setState({newTodoName: ''});
  }

  removeTodo = (todoId) => {
    this.props.handleRemoveTodo(todoId);
  }

  toggleTodo = (todo) => {
    todo.completed = !todo.completed;
    this.props.handleToggleTodo(todo);
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
            return <li key={todo._id}>
            <span 
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
              onClick={() => this.toggleTodo(todo)}>
              {todo.name}
            </span>
            <button onClick={() => this.removeTodo(todo._id)}>X</button>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleAddTodo: (todo) => dispatch(addTodoToAPI(todo)),
  handleRemoveTodo: (id) => dispatch(removeTodoFromAPI(id)),
  handleRetrieveTodos: () => dispatch(getTodosFromAPI()),
  handleToggleTodo: (todo) => dispatch(toggleTodoOnAPI(todo))
});

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);