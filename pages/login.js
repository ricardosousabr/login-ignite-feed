import React from "react";
import Header from "../src/components/Header/index";
import FromLogin from "../src/components/FormLogin/index";
import Button from "../src/components/Button/index";
function login() {
  return (
    <>
      <Header />
      <FromLogin />
      <Button>Tentar de outra maneira</Button>
    </>
  );
}

export default login;
