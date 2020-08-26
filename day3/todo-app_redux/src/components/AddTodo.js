import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodoAction } from "../actions/todos";

class AddTodo extends Component {
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
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddTodo: todo => dispatch(addTodoAction(todo))
});

export default connect(null, mapDispatchToProps)(AddTodo);