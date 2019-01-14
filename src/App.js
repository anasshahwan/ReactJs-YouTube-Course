import React, { Component } from 'react';
import User from './Components/User';
import Card from './Components/Card';

class App extends Component {
  render() {
    return (
      <div>
      <div>Hello React</div>
      <User/>
      <Card/>
      
      </div>
    );
  }
}

export default App;
