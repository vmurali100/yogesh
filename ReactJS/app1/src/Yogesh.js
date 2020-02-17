import React from "react";
// import Sipra from "./Sipra";
import Sample1 from "./Components/Sample1";
export default function Yogesh(props) {
  return (
    <div>
      <p>Hello From Yogesh</p>
      <h2>{props.msg}</h2>
      <hr></hr>
      <h2>Object Receied from Sipra Component</h2>
      {Object.values(props.myObj).map(function(val, index) {
        return <p key={index}>{val}</p>;
      })}
      <hr></hr>
      <h2>Array Receied From Sipra Component</h2>
      {props.myUsers.map(function(val) {
        return <p key={val}>{val}</p>;
      })}
      {/* <button onClick={props.myFunc}>Click</button> */}
      <Sample1 />
    </div>
  );
}
