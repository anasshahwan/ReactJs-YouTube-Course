import React, { Component } from 'react';
import User from './Components/UserComponent/User';
import Card from './Components/Card';
import './App.css'

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
    const myStyle = {
      backgroundColor : '#e0d8d8',
      fontSize:'20px'
    }

    
    return (
      <div className='container'  style={myStyle} >
        <User name="anas" any="React" info ={user} />
        <User name="ahmad" any="nodeJs"/>
        <User name="ali" any="Redux"/>       
      </div>
    );
  }
}

export default App;
