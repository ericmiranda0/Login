import React from "react";
import "./Input.css";

const Input: React.FC<{ children?: string }> = ({ children }) => {
  return <input type="text" className="input" placeholder={children} />;
};

export default Input;
