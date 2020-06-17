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
  handleChange(event){
    this.setState({
      firstName : event.target.value
    })
  }
  render(){
  return (
   <form>
     <input type="text" placeholder="first Name" onChange={this.handleChange}/>
     <input type="text" placeholder="first Name" onChange={this.handleChange} />
     <h1>{this.state.firstName}</h1>
   </form>
  );
  }
}

export default App;
