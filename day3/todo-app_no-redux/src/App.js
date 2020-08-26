import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: "zejldcs6zpkebjjvjr", name: "Walk the dog"},
      { id: "ums8j0t5559kebjkoho", name: "Buy groceries"}
    ]
  }

  addNewTodo = (newTodo) => { 
    const todos = this.state.todos.concat(newTodo); 
    this.setState({todos: todos});
  }

  removeTodo = (todoId) => {
      const todos = this.state.todos.filter((todo) => todo.id !== todoId);
      this.setState({todos: todos});
  }

  render() {
    return (
    <div className="App">
      <AddTodo addNewTodo={this.addNewTodo} /> 
      <TodoList removeTodo={this.removeTodo} todos={this.state.todos} />
    </div>
    );
  }
}

export default App;
