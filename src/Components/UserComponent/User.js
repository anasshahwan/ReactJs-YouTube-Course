import React, { Component } from 'react';
import './User.css'
class User extends Component {
  render() {
        const {name , any } = this.props;
    return (
            <div className='userCard'>  <div className="header">Im A User Component </div>
            <p>My name is {name }  and i love {any} </p>
      </div>
    );
  }
}

export default User;
