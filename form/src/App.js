import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName : "",
      lastName : ""
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
     <input type="text" name="" placeholder="first Name" onChange={this.handleChange}/>
     <br />
     <input type="text" placeholder="last Name" onChange={this.handleChange} />
      <h1>{this.state.firstName}</h1> <h1>{this.state.lastName}</h1>

   </form>
  );
  }
}

export default App;
