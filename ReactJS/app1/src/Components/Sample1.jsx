import React, { Component } from "react";

class Sample1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "Murali",
      person: {
        fname: "Ram",
        lname: "krishna"
      },
      users: ["Ravi", "Sam", "Kiran"]
    };
    console.log(this.state);
  }

  sayHello = () => {
    console.log("Say Hello is called");
  };

  convertToArray = obj => {
    console.log(Object.values(obj));
    return Object.values(obj);
  };
  render() {
    return (
      <div>
        <h2>{this.state.myName}</h2>
        {this.convertToArray(this.state.person).map(val => {
          return <p key={val}>{val}</p>;
        })}
        <button onClick={this.sayHello}>Click</button>
      </div>
    );
  }
}

export default Sample1;
