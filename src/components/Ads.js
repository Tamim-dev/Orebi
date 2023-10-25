import React from "react";
import Container from "./layout/Container";
import Image from "./layout/Image";
import { Link } from "react-router-dom";
import Heading from "./layout/Heading";
import Button from "./layout/Button";

const Ads = () => {
  return (
    <Container className="mt-3 lg:mt-32">
      <div className="bg-[#F3F3F3] lg:flex lg:py-7 lg:pl-16">
        <div className=" lg:w-2/4 flex lastDevice:max-lg:justify-center">
          <Image imgsrc={"assets/watch.png"} />
        </div>
        <div className=" lg:w-2/4 lg:py-14 p-4 lastDevice:max-lg:text-center">
          <Heading title={"Watch of the year"} />
          <p className="lg:max-w-[511px] font-dm text-base text-cdrop mt-9 mb-9 lg:mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry orem Ipsum..
          </p>
          <Button title={"Shop Now"} />
        </div>
      </div>
    </Container>
  );
};

export default Ads;
