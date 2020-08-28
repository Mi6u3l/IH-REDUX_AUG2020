import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
       {this.props.loggedUser 
        ? <div>Welcome {this.props.loggedUser.username}</div>
        : <div>Please login</div>
        }
        
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedUser: state.loggedUser
  };
}

export default connect(mapStateToProps)(App);
