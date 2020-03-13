import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hello {this.props.user} .... Welcome to React Training Sessions</h2>
      </div>
    );
  }
}
