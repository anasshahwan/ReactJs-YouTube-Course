import React, { Component } from 'react';
import User from './Components/UserComponent/User';
 import './App.css'

import  { StyleRoot } from 'radium';

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
    {id:4,name:"anas",lang:"React"},
    {id:5,name:"ahmad",lang:"nodeJs"},
    {id:6,name:"ali",lang:"PHP"},
    
  ],
  Title:"This is My Users",
     }


  }

 


showUsers = () => {
  this.setState({showUsers:!this.state.showUsers})
}

deleteUser = (index) => {
      const myUsers = Object.assign([],this.state.Users)
      myUsers.splice(index,1)
    this.setState({Users:myUsers})
          console.log(myUsers)
}
  render() {
 
    const myStyle = {
      fontSize:'20px',
      "@media (max-width:500px)":{
        backgroundColor:"red",
        
    }
    }

     

    let Container;
 
    if(this.state.showUsers){

      let myUsers = this.state.Users.map((user,index) => {
            return (<User key={index} name={user.name} lang={user.lang} deleteUser={()=>this.deleteUser(index)}   />)
  
            
      }
      )
      Container = 
        <div  style={myStyle}>
           <h1 style={{textAlign:'center'}}>{this.state.Title}</h1>
            <div className="container">
            {myUsers}
            </div>
        
            </div>
      
    }else {
      Container = 
      <div>No Users</div>
      
    }
    
    
    return (
   
      <StyleRoot>
        {Container}
     <button onClick={this.showUsers}> {this.state.showUsers ? "Hide Users" : "Show Users"} </button>

      </StyleRoot>

    );
  }
}

export default App;
