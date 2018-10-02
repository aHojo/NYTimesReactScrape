import React from "react";

export const Input = props => {
  return (
    <div className="form-group">
      <div>{props.label}</div>
      <input className="form-control" {...props} />
    </div>
  )
};
