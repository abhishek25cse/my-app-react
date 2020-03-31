import React, { Component } from 'react';

class User extends Component{
render() {
  return (
  <p>
  {this.props.names.firstName} {this.props.names.lastName} {this.props.names.key} <button onClick={this.clicked.bind(this)}>x</button>

  </p>
);
}

clicked() {
  console.log("Clicked button ", this.props.names.key);
}

}

export default User
