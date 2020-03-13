import React from "react";
import NewApp from "./Components/NewApp";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <NewApp /> */}
      <Welcome user="Sipra" />
      <Welcome user="Yogesh" />
      <Welcome user="Murali" />
    </div>
  );
}

export default App;
