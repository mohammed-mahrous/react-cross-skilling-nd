import React from "react";

class TodoItem extends React.Component {
  render() {
    console.log(this.props.todo);
    const { id, text, completed } = this.props.todo;
    return (
      <li>
        <small>{id}</small>
        <header>
          <h1>{text}</h1>
        </header>
        {/* Homework:
            1. Add a checkbox to the todo item
            2. The checkbox should be checked if the todo is completed (completed === true)
        */}
        <div>
          <input type="checkbox" checked={completed} />
        </div>
      </li>
    );
  }
}
export default TodoItem;
