import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Logo de primeira! Prepara as marmitas"
  };

  changeUsernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const style = {
      border: "1px solid blue",
      backgroundColor: "green",
      margin: "0",
      padding: "20px",
      textAlign: "center"
    };
    return (
      <div className="App" style={style}>
        <UserInput
          username={this.state.username}
          changed={this.changeUsernameHandler}
        />
        <UserOutput username={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
