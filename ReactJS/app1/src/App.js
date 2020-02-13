import React from "react";

function App() {
  //Declaring A variable
  let myName = "Murali";
  let person = {
    fname: "Murali",
    lname: "krishna",
    email: "vmurali@gmail.com"
  };

  let users = ["Ram", "ravi", "krishna", "sam"];
  return (
    <div className="App">
      <h2>hello world From App Component</h2>
      {/* Accessing a vairable */}
      <p>{myName}</p>
      {/* <p>{person.fname}</p>
      <p>{person.lname}</p>
      <p>{person.email}</p> */}
      {/* {Object.values(person).map(val => {
        return <p>{val}</p>;
      })} */}

      {users.map(function(val) {
        return <p>{val}</p>;
      })}
    </div>
  );
}

export default App;
