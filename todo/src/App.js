import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import todosData from './todosData';

function App() {
  const todoItems = todosData.map(item => <TodoItem />)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}

export default App;
