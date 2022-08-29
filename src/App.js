import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./styles.css";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    const addTodo = (value) => {
      const newTodo = {
        id: uuid(),
        completed: false,
        title: value
      };

      //.push
      //.unshift()

      //we Need to update the todos array
      //Do not change existing arrays ever
      //Whenever You want to change state array, you
      //always have to create a new array and assign that

      const updatedArray = [...this.state.todos, newTodo];
      this.setState({
        todos: updatedArray
      });

      //other Way out
    };

    const deleteTodo = (todoId) => {
      //Delete an element from an array

      //1. Identify the element that you want to delete
      //2. Filter the Records Which do not have that Id
      const updatedArray = this.state.todos.filter(
        (todo) => todo.id !== todoId
      );

      this.setState({
        todos: updatedArray
      });
    };

    return (
      <div className="App">
        <TodoInput addTodo={addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

export default App;

//npm install uuid
