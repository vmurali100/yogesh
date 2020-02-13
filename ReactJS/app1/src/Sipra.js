import React from "react";
import Yogesh from "./Yogesh";

export default function Sipra() {
  let message = "I am From Sipra";
  let person = {
    fname: "Murali",
    lname: "Krishna"
  };
  let users = ["Ram", "Ravi", "sam"];
  return (
    <div>
      <h2>Hello From Sipra</h2>
      <Yogesh msg={message} myObj={person} myUsers={users}></Yogesh>
    </div>
  );
}
