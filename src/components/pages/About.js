import React from "react";
import Container from "../../components/layout/Container";
import PageHeading from "../layout/PageHeading";
import Image from "../layout/Image";
import Button from "../layout/Button";

const About = () => {
  return (
    <section>
      <Container>
        <PageHeading tilte="About" />
        <div className="mt-10 max-h-[780px] sm:flex sm:gap-x-10 lg:mt-24">
          <div className="relative lastDevice:max-sm:mb-3 sm:w-2/4">
            <Image className="h-full w-full" imgsrc={"assets/aboutimg.png"} />
            <div className=" absolute bottom-4 left-1/2 -translate-x-2/4 lg:bottom-8">
              <Button title="Our Brands" />
            </div>
          </div>
          <div className="relative sm:w-2/4">
            <Image className="h-full w-full" imgsrc={"assets/product_1.png"} />
            <div className=" absolute bottom-4 left-1/2 -translate-x-2/4 lg:bottom-8">
              <Button title="Our Brands" />
            </div>
          </div>
        </div>
        <h2 className=" font-dm text-cdrop xl:text-[39px] lastDevice:text-2xl text-3xl xl:my-32 my-10 xl:leading-[52px] text-center">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h2>
        <div className=" flex lg:gap-x-10 gap-x-8 gap-y-8 lastDevice:max-lg:flex-wrap">
          <div className="lg:w-[32%] lastDevice:max-sm:w-full w-[47%] bg-[#d4d4d428] p-4 rounded-lg">
            <h2 className=" font-dm text-2xl font-bold text-cdrop mb-3">Our Vision</h2>
            <p className=" font-dm text-base text-cGrey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="lg:w-[32%] lastDevice:max-sm:w-full w-[47%] bg-[#d4d4d428] p-4 rounded-lg">
            <h2 className=" font-dm text-2xl font-bold text-cdrop mb-3">Our Story</h2>
            <p className=" font-dm text-base text-cGrey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>
          <div className="lg:w-[32%] lastDevice:max-sm:w-full w-[47%] bg-[#d4d4d428] p-4 rounded-lg">
            <h2 className=" font-dm text-2xl font-bold text-cdrop mb-3">Our Brands</h2>
            <p className=" font-dm text-base text-cGrey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
