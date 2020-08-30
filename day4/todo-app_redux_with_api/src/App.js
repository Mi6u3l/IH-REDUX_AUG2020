import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { authenticateOnAPI } from './actions/loggedUser';

class App extends Component {

  componentDidMount() {
    this.props.handleAuthenticate();
  }

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

const mapDispatchToProps = dispatch => ({
  handleAuthenticate: () => dispatch(authenticateOnAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
