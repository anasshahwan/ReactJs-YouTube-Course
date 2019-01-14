import React, { Component } from 'react';
import User from './Components/User';
import Card from './Components/Card';

class App extends Component {
  render() {
    const user = {
      name:"anas",
      myfav : "react"
    }
    const comments = {
      title:"hii i love react ",
      desc : "this is a awesome!!"
    }

    
    return (
      <div>
      <div>Hello React</div>
      <User name="anas" any="React" info ={user} />
        <User name="ahmad" any="nodeJs"/>
        <User name="ali" any="Redux"/> 
        <Card likes ={22} comments={comments}/>
      
      </div>
    );
  }
}

export default App;
