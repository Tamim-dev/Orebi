import React from "react";

const Badge = ({ title }) => {
  return (
    <p className=" absolute top-5 left-5 inline-block bg-cdrop px-7 py-2 font-dm text-sm font-bold text-white">
      {title}
    </p>
  );
};

export default Badge;
