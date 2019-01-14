import React, { Component } from 'react';

class User extends Component {
  render() {
        const {name , any } = this.props;
    return (
            <div>  <div>Im A User Component </div>
            <p>My name is {name }  and i love {any} </p>
      </div>
    );
  }
}

export default User;
