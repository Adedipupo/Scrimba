import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  render(){
  return (
   <form>
     <input type="text" placeholder="firstname" />
   </form>
  );
  }
}

export default App;
