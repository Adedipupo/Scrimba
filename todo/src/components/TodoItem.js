import React from 'react';

const TodoItem = (props) => {
  const handleInput = () => {
    console.log('input');
  }
return(
  <div className="todo-item">
        <input onClick={handleInput} type="checkbox" checked={props.item.completed}/>
        <p> {props.item.text} </p>
  </div>
)
}

export default TodoItem;