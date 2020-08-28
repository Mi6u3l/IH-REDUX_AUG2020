import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodoToAPI } from "../actions/todos";

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
          name: this.state.newTodoName
        }   
    
        this.props.handleAddTodo(newTodo);
        this.setState({newTodoName: ''});
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
    handleAddTodo: todo => dispatch(addTodoToAPI(todo))
});

export default connect(null, mapDispatchToProps)(AddTodo);