import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName : "",
      lastName : "",
      isFriendly: true
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    const {name , value} = event.target
    this.setState({
      [name] : value
    })
  }
  render(){
  return (
   <form>
     <input 
       type="text" 
       value={this.state.firstName}
       name="firstName" 
       placeholder="first Name" 
       onChange={this.handleChange}/>
     
     <br />
     
     <input 
       type="text" 
       value={this.state.lastName}
       name="lastName" 
       placeholder="last Name" 
       onChange={this.handleChange} />

   
      
      <h1>{this.state.firstName}</h1> <h1>{this.state.lastName}</h1>

      <textarea value={"1 million dollar"}/>

      <input 
        type="checkbox"
        name="isFriendly"
        checked={this.state.isFriendly}
      />

   </form>
  );
  }
}

export default App;
