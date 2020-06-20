import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName : "",
      lastName : "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
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

   
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="last Name"
          onChange={this.handleChange} />
    
     

   
      
      <h1>{this.state.firstName}</h1> <h1>{this.state.lastName}</h1>

      <textarea value={"1 million dollar"}/>

      <br />

    <label>
        <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        /> isFriendly ?
    </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        /> Male
    </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        /> Female ?
    </label>
      
  <h2> You're a {this.state.gender}</h2>


  <select 
    value={this.state.favColor}
    onChange={this.handleChange}
    >
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="red">Red</option>
  </select>

  <h2>Your favColor is : {this.state.favColor}</h2>
   </form>
  );
  }
}

export default App;
