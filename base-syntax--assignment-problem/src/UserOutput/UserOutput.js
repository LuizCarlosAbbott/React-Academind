import React from "react";

import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Batata Doce</p>
      <p>E Frango o que? {props.username}</p>
    </div>
  );
};

export default userOutput;
