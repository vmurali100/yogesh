import React, { Component } from "react";

export default class NewChildComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(this.props);
  }

  sayHello = () => {
    return <h1>I am from SayHello Function</h1>;
  };

  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <ul>
          <li>{this.props.person.fname}</li>
          <li>{this.props.person.lname}</li>
        </ul>
        <ul>
          {this.props.users.map(user => {
            return <li key={user}>{user}</li>;
          })}
        </ul>
        {this.sayHello()}
      </div>
    );
  }
}
