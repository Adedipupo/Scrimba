import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <input
        onChange={() => {
          console.log('Changed!')
        }}
        type="checkbox"
        checked={props.item.completed}
      />
      <p> {props.item.text} </p>
    </div>
  );
};

export default TodoItem;
