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

    const numbers =[2992,22,22,222,2,2,2,2]
    return (
      <div>
      <div>Hello React</div>
      <User name="anas"  isLoggedIn={false} any="React" info ={user} />
        <User name="ahmad" any="nodeJs">
          <h1>This is Children Data</h1>
        </User>
        <User name="ali" any="Redux">
            <h1>This is Children data</h1>
        </User>
        <Card likes ={22} numbers={numbers} comments={comments}/>
      
      </div>
    );
  }
}

export default App;
