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
    const {name , value , type , checked} = event.target
    type === "checkbox" ? this.setState({ [name] : checked}) : this.setState({
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

   <label>
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="last Name"
          onChange={this.handleChange} />
   </label>  
     

   
      
      <h1>{this.state.firstName}</h1> <h1>{this.state.lastName}</h1>

      <textarea value={"1 million dollar"}/>

      <input 
        type="checkbox"
        name="isFriendly"
        checked={this.state.isFriendly}
        onChange={this.handleChange}
      />

   </form>
  );
  }
}

export default App;
