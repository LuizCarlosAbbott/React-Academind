import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="Luiz" age="23" />
        <Person name="Valéria" age="23">
          My Hobbies: Eating
        </Person>
        <Person name="Igor" age="0.10" />
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
