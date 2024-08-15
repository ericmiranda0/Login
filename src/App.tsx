import React from "react";
import "./App.css";
import Email from "./components/Email";
import Button from "./components/Button";
import Password from "./components/Password";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no cambo abaixo.</p>
        <Email />
        <Password />
        <a href="/">Esqueci minha senha</a>
        <div className="button-login">
          <Button>Acessar</Button>
        </div>
      </div>
    </>
  );
};

export default App;
