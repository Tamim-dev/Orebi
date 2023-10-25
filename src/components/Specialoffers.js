import React from "react";
import Container from "./layout/Container";
import Heading from "./layout/Heading";
import Product from "./layout/Product";

const Specialoffers = () => {
    return (
        <section className=" mt-3 lg:mt-24">
          <Container>
            <div className=" mb-5 lg:mb-12">
              <Heading title="Special Offers" />
            </div>
            <div className="flex justify-between flex-wrap">
                <div className="ipad:!w-[370px] sm:!w-[300px] tablet:!w-[315px] tablet2:!w-[335px] lg:!w-[310px]">
                  <Product
                    imgsrc="assets/product_9.png"
                    badge={true}
                    productName="Basic Crew Neck Tee"
                    productPrice="$44.00"
                    productColor="Black"
                  />
                </div>
                <div className="ipad:!w-[370px] sm:!w-[300px] tablet:!w-[315px] tablet2:!w-[335px] lg:!w-[310px]">
                  <Product
                    imgsrc="assets/product_8.png"
                    badge={true}
                    productName="Basic Crew Neck Tee"
                    productPrice="$44.00"
                    productColor="Black"
                  />
                </div>
                <div className="ipad:!w-[370px] sm:!w-[300px] tablet:!w-[315px] tablet2:!w-[335px] lg:!w-[310px]">
                  <Product
                    imgsrc="assets/product_3.png"
                    badge={true}
                    productName="Basic Crew Neck Tee"
                    productPrice="$44.00"
                    productColor="Black"
                  />
                </div>
                <div className="ipad:!w-[370px] sm:!w-[300px] tablet:!w-[315px] tablet2:!w-[335px] lg:!w-[310px]">
                  <Product
                    imgsrc="assets/product_5.png"
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

export default Specialoffers;
