import React from "react";

const Badge = ({ title }) => {
  return (
    <p className=" absolute left-5 top-5 inline-block bg-cdrop px-5 py-2 font-dm lg:text-sm text-xs font-bold text-white lg:px-7">
      {title}
    </p>
  );
};

export default Badge;
