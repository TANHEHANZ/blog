import React from "react";

const Input = ({ label, type, requerid }) => {
  return (
    <div className="flex  gap-2 items-center">
      <label htmlFor={label} className="w-[25%] min-w-[6rem] text-sm">
        {label} {""}
        {requerid && <strong className="text-red-500">*</strong>}
      </label>
      <input
        type={type}
        className=" bg-transparent border border-Brown700 rounded-md outline-none px-4 py-[.5rem]"
      />
    </div>
  );
};

export default Input;
