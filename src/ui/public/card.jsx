import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ children, path }) => {
  const navigate = useNavigate();
  const redireccionar = (path) => {
    console.log(path);
    navigate("/post/" + path);
  };

  return (
    <article
      className="rounded-md   bg-[#1d3367d2] w-full  sm:w-[20rem] sm:h-auto  border shadow-md overflow-hidden relative  group  cursor-pointer z-5 border-white"
      onClick={() => redireccionar(path)}
    >
      {children}
    </article>
  );
};

export default Card;
