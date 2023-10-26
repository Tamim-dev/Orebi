import React from "react";
import { RxTriangleLeft } from "react-icons/rx";
const SamplePrevArrow = ({  style, onClick }) => {
  return (
    <span
      className=" absolute top-[35%] left-0 z-50 !flex lg:h-16 lg:w-16 sm:max-md:h-10 sm:max-md:w-10 h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <RxTriangleLeft className="text-2xl text-white" />
    </span>
  );
};

export default SamplePrevArrow;