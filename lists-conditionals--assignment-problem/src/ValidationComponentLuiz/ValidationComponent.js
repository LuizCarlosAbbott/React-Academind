import React from "react";

const validationComponent = props => {
  return (
    <div>
      <p>
        {props.length}{" "}
        {props.length > 5 ? "Text is long enough" : "Text is too short"}
      </p>
    </div>
  );
};

export default validationComponent;
