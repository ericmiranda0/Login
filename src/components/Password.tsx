import * as React from "react";
import Input from "./Input";
import "./Password.css";
const Password = () => {
  return (
    <>
      <h5>Senha</h5>
      <div className="password-container">
        <Input children="Sua senha" />
      </div>
    </>
  );
};

export default Password;
