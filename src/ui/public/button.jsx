const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={` py-2 px-4 cursor-pointer rounded-md border border-Brown700 hover:border-Brown100 transition-all duration-500 ease-in-out min-w-40  flex justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
