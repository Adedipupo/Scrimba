import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName : ""
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(){
    this
  }
  render(){
  return (
   <form>
     <input type="text" placeholder="first Name" onChange={this.handleChange}/>
   </form>
  );
  }
}

export default App;
