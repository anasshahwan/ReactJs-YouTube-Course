import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {

    console.log(this.props)
        const {name , any , children } = this.props;

        return (
            <div>  <div>Im A User Component </div>
            <p>My name is {name }  and i love {any} </p>
            <div>{children}</div>
      </div>
    );
  }
}

export default User;


User.propsTypes = {
    name : PropTypes.string.isRequired,
    any : PropTypes.string,
    isLoggedIn: PropTypes.bool,
    children: PropTypes.element.isRequired
}