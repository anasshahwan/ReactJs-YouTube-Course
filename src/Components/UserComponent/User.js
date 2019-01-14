import React, { Component } from 'react';
import './User.css'
import UserButton from './UserButton';

class User extends Component {
  render() {
        const {name , any } = this.props;
    return (
            <div className='userCard'>  <div className="header">Im A User Component </div>
            <p>My name is {name }  and i love {any} </p>
            <UserButton> Check Your Todo</UserButton>

      </div>
    );
  }
}

export default User;
