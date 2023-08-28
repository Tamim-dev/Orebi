import React from "react";
import Container from "./layout/Container";
import Image from "./layout/Image";

const Advertise = () => {
  return (
    <section className="mt-6 xl:mt-28">
      <Container className="flex xl:gap-x-10 gap-x-2 md:gap-x-4 sm:gap-x-4">
        <div className=" w-3/6">
          <Image imgsrc="assets/Ad_1.png"/>
        </div>
        <div className=" w-3/6">
          <Image imgsrc="assets/Ad_2.png" className="xl:mb-11 lg:mb-7 md:mb-5 sm:mb-4 mb-2" />
          <Image imgsrc="assets/Ad_3.png" />
        </div>
      </Container>
    </section>
  );
};

export default Advertise;
