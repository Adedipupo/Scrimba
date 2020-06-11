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
   this.handleChange = this.handleClick.bind(this)
  }
  handleClick(id) {
    this.setState( prevState => {
      const updatedTodos = prevState.todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos : updatedTodos
      }
    })
  }
  render(){
    const todoItems = this.state.todos.map(item => 
    <TodoItem 
      key={item.id} 
      item={item} 
      handleClick={this.handleChange}
      />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
