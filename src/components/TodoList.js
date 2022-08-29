import React from "react";

const todos = [
  {
    id: 1,
    title: "Hit the gym",
    completed: false
  },
  {
    id: 2,
    title: "Shopping",
    completed: true
  }
];

class TodoList extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => {
                  this.props.deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
              <button>Mark as Complete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default TodoList;
