import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", fontSize: 50, color: "white" ,backgroundColor: "blue"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
