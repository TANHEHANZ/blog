import React from "react";
import Input from "../../ui/private/input";
import Button from "../../ui/public/button";

const Login = () => {
  return (
    <div className="  w-screen h-screen flex justify-center items-center">
      <form action="submint" className="  flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold text-center">Inicio de seción</h1>
        <Input label="Nombre" type="text" requerid />
        <Input label="Contraseña" type="password" requerid />
        
        <Button>Inciar secion</Button>
      </form>
    </div>
  );
};

export default Login;
