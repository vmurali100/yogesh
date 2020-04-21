import React from "react";
import "./App.css";
import Main from "./CRUD/Main";
import Main_Local from "./CRUD_LOCAL/Main_Local";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Main_Local />
    </div>
  );
}

export default App;
