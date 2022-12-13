import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">TO DO List({todoLength})</div>
      <div>To Day</div>
      <div>{children}</div>
      <div>Tomorrow</div>
      <div>{children}</div>
    </div>
  );
};
export default Template;
