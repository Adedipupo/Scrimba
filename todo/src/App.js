import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import todosData from './todosData';

function App() {
  const todoItems = todosData.map(item => <TodoItem />)
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
