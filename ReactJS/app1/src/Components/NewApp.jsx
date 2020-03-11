import React, { Component } from "react";
import NewChildComp from "./NewChildCopm";
export default class NewApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World from New App",
      person: {
        fname: "Murali",
        lname: "Krishna"
      },
      users: ["Ram", "Ravi", "Sam", "Kiran"]
    };
  }

  render() {
    return (
      <div>
        <h2>Hello from NewApp Component</h2>
        {/* <h2>{this.state.message}</h2>
        <ul>
          <li>{this.state.person.fname}</li>
          <li>{this.state.person.lname}</li>
        </ul>
        <ul>
          {this.state.users.map(user => {
            return <li>{user}</li>;
          })}
        </ul> */}
        <NewChildComp {...this.state} />
      </div>
    );
  }
}
