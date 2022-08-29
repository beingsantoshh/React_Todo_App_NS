import React from "react";

class TodoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  render() {
    const updateTodo = (e) => {
      this.setState({
        todo: e.target.value
      });
    };

    const addTodoToList = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.todo);
      this.setState({
        todo: ""
      });
    };

    return (
      <form onSubmit={addTodoToList}>
        <input
          placeholder="Enter the task"
          value={this.state.todo}
          onChange={updateTodo}
        />
        <button type="submit"> Add item</button>
      </form>
    );
  }
}

export default TodoInput;
