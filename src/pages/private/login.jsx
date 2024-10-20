import React from "react";
import Input from "../../ui/private/input";
import Button from "../../ui/public/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const notify = (e) => {
    e.preventDefault();
    toast("No Tienes permiso vete de aca >:-| ");
  };
  return (
    <div className="  w-screen h-screen flex justify-center items-center">
      <form onSubmit={notify} className="  flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold text-center">Inicio de seción</h1>
        <Input label="Nombre" type="text" requerid />
        <Input label="Contraseña" type="password" requerid />

        <Button onClick={notify}>Inciar secion</Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
