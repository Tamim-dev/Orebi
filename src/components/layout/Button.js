import React from "react";

const Button = ({title,className}) => {
  return <button className={`bg-cdrop text-white font-dm py-3 px-6 font-bold text-sm xl:px-14 xl:py-4 ${className}`}>{title}</button>;
};

export default Button;
