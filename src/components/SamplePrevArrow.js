import React from "react";
import { RxTriangleLeft } from "react-icons/rx";
const SamplePrevArrow = ({  style, onClick }) => {
  return (
    <span
      className=" absolute top-[35%] left-0 z-50 !flex lg:h-16 lg:w-16 sm:max-md:h-8 sm:max-md:w-8 h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]"
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