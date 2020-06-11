import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import todosData from './todosData';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
   this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    console.log('changed' , id)
  }
  render(){
    const todoItems = this.state.todos.map(item => 
    <TodoItem 
      key={item.id} 
      item={item} 
      handleClick={this.handleClick}
      />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
