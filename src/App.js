import React, { Component } from 'react';
import User from './Components/UserComponent/User';
import Card from './Components/Card';
import './App.css'

import Radium, { StyleRoot } from 'radium';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showUsers:false,
      showUsersText:"",
       Users:[
    {id:1,name:"anas",lang:"React"},
    {id:2,name:"ahmad",lang:"nodeJs"},
    {id:3,name:"ali",lang:"PHP"},
  ],
  Title:"This is My Users",
  counter:0,
    }


  }


  Increase = (id) => {

    if(id == "+"){
      console.log("+")
    }
    
    else if (id == '-'){
      console.log("-")
    }
  // this.setState({
  //   counter:this.state.counter+1,
  //   Title: "New Value",
  // })
  
}


showUsers = () => {
  this.setState({showUsers:!this.state.showUsers})
}


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
      fontSize:'20px',
      "@media (max-width:500px)":{
        backgroundColor:"red",
        
    }
    }

    let Users;
    if(this.state.showUsers){
    Users = 
        <div className="container" style={myStyle}>

        <User name={this.state.Users[0].name} lang={this.state.Users[0].lang}  />
        <User name={this.state.Users[1].name} lang={this.state.Users[1].lang} />
        <User name={this.state.Users[2].name} lang={this.state.Users[2].lang} /> 
            <p>{this.state.counter}</p>
            <button onClick={()=> this.Increase("+")} >+</button>
            <button onClick={()=> this.Increase("-") }>-</button>
        
            </div>
      
    }else {
      Users = 
      <div>No Users</div>
      
    }
    
    
    return (
   
      <StyleRoot>
        <h1>{this.state.Title}</h1>
        {Users}
     <button onClick={this.showUsers}> {this.state.showUsers ? "Hide Users" : "Show Users"} </button>

      </StyleRoot>

    );
  }
}

export default App;
