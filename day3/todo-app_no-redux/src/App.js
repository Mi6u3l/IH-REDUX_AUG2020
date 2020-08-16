import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [],
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

    const todos = this.state.todos.concat(newTodo); 
    this.setState({todos: todos, newTodoName: ''});
  }

  removeTodo = (todoId) => {
    const todos = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({todos: todos});
  }

  toggleTodo = (todoId) => {
    this.state.todos.forEach(todo => {
      if (todo.id === todoId) {
        todo.isComplete = !todo.isComplete;
      }
    });

    this.setState({todos: this.state.todos});

    /*
    const todos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        const updatedTodo = {
          ...todo,
          isComplete: !todo.isComplete,
        };
 
        return updatedTodo;
      }
 
      return todo;
    });

    this.setState({todos: todos});*/
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
        {this.state.todos.map((todo)=>{
          return <li key={todo.id}>
          <span style={{
            textDecoration: todo.isComplete ? 'line-through' : 'none',
          }}
          onClick={() => this.toggleTodo(todo.id)}>
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

export default App;
