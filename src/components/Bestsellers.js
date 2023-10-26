import React from "react";
import Container from "./layout/Container";
import Heading from "./layout/Heading";
import Product from "./layout/Product";

const Bestsellers = () => {
  return (
    <section className=" mt-3 lg:mt-24">
      <Container>
        <div className=" mb-5 lg:mb-12">
          <Heading title="Our Bestsellers" />
        </div>
        <div className="flex justify-between flex-wrap">
            <div className="xl:!w-[24%] sm:!w-[48%] tablet:!w-[48%]  lg:!w-[32%] lastDevice:!w-full">
              <Product
                imgsrc="assets/product_5.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div className="xl:!w-[24%] sm:!w-[48%] tablet:!w-[48%]  lg:!w-[32%] lastDevice:!w-full">
              <Product
                imgsrc="assets/product_6.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div className="xl:!w-[24%] sm:!w-[48%] tablet:!w-[48%]  lg:!w-[32%] lastDevice:!w-full">
              <Product
                imgsrc="assets/product_7.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div className="xl:!w-[24%] sm:!w-[48%] tablet:!w-[48%]  lg:!w-[32%] lastDevice:!w-full">
              <Product
                imgsrc="assets/product_8.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Bestsellers;
