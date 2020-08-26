import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        newTodoName: ''
    }

    generateId = () => {
        return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
    }
    
   handleChange = (event) => {  
     const {name, value} = event.target;
     this.setState({[name]: value});
    }

    handleAddNewTodo = (event) => { 
        event.preventDefault();
        let newTodo = {
            id: this.generateId(),
            name: this.state.newTodoName,
        }
        this.setState({newTodoName: ''});
        this.props.addNewTodo(newTodo);
     }

  render() {
    return (
     <form onSubmit={this.handleAddNewTodo}>
        <h1>Todo List</h1>
        <input id="todo" type="text" name="newTodoName" value={this.state.newTodoName} 
        onChange={this.handleChange} placeholder="Add Todo" />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default AddTodo;
