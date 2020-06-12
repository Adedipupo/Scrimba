import React from "react";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle : 'italic'
  }
  return (
    <div className="todo-item">
      <input
        onChange={ () => props.handleChange(props.item.id)}
        type="checkbox"
        checked={props.item.completed}
      />
      <p> {props.item.text} </p>
    </div>
  );
};

export default TodoItem;
