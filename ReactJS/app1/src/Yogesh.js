import React from "react";
import Sipra from "./Sipra";

export default function Yogesh(props) {
  console.log(props);
  return (
    <div>
      <p>Hello From Yogesh</p>
      <h2>{props.msg}</h2>
      <hr></hr>
      <h2>Object Receied from Sipra Component</h2>
      {Object.values(props.myObj).map(function(val) {
        return <p>{val}</p>;
      })}
      <hr></hr>
      <h2>Array Receied From Sipra Component</h2>
      {props.myUsers.map(function(val) {
        return <p>{val}</p>;
      })}
    </div>
  );
}
