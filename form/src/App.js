import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(){
    console.log("yeah baby!!!1")
  }
  render(){
  return (
   <form>
     <input type="text" placeholder="firstname" onChange={this.handleChange}/>
   </form>
  );
  }
}

export default App;
