import React from "react";

import "./UserOutputLuiz.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Batata Doce</p>
      <p>E Frango o que? {props.userName}</p>
    </div>
  );
};

export default userOutput;
