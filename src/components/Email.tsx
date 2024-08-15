import * as React from "react";
import "./Email.css";
import Input from "./Input";
const Email = () => {
  return (
    <>
      <h5>E-mail</h5>
      <div className="email-container">
        <div className="input-email-container">
          <Input children="Digite seu e-mail" />
        </div>
      </div>
    </>
  );
};

export default Email;
