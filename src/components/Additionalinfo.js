import React from "react";
import { FaCarSide } from "react-icons/fa";
import { RiNumber2 } from "react-icons/ri";
import { TbReload } from "react-icons/tb";
import Container from "./layout/Container";

const Additionalinfo = () => {
  return (
    <section className=" sm:py-7 py-2 border-b-2">
      <Container className="flex justify-between">
        <div className="flex items-center gap-x-1 sm:gap-x-5">
          <RiNumber2 className=" text-2xl font-bold text-[#6D6D6D] text-[8px] sm:text-base" />
          <p className=" font-dm text-[#6D6D6D] text-[8px] sm:text-base">Two years warranty</p>
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-5">
          <FaCarSide className=" text-2xl font-bold text-[#6D6D6D] text-[8px] sm:text-base" />
          <p className=" font-dm text-[#6D6D6D] text-[8px] sm:text-base">Free shipping</p>
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-5">
          <TbReload className="text-[#6D6D6D] text-2xl font-bold text-[8px] sm:text-base" />
          <p className=" font-dm text-[#6D6D6D] text-[8px] sm:text-base">Return policy in 30 days</p>
        </div>
      </Container>
    </section>
  );
};

export default Additionalinfo;
