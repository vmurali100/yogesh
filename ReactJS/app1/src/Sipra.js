import React from "react";
import Yogesh from "./Yogesh";

export default function Sipra() {
  let message = "I am From Sipra";
  let person = {
    fname: "Murali",
    lname: "Krishna"
  };

  //Es5 function
  //  const addValue = function (){}

  //Es6 Arrow function
  const addValue = () => {
    console.log("Hello World from MyFunc");
  };
  let users = ["Ram", "Ravi", "sam"];
  return (
    <div>
      <h2>Hello From Sipra</h2>
      <Yogesh
        msg={message}
        myObj={person}
        myUsers={users}
        myFunc={addValue}
      ></Yogesh>
    </div>
  );
}
