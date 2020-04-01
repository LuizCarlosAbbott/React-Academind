import React from "react";

import "./UserInputLuiz.css";

const userInput = props => {
  return (
    <input
      className="UserInput"
      type="text"
      onChange={props.changed}
      value={props.currentValue}
    />
  );
};

export default userInput;
