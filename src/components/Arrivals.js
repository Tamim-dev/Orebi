import React from "react";
import Container from "./layout/Container";
import Heading from "./layout/Heading";
import Product from "./layout/Product";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow"
import SamplePrevArrow from "./SamplePrevArrow";

const Arrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className=" lg:mt-32 mt-3">
      <Container>
        <div className=" lg:mb-12 mb-3">
          <Heading title="New Arrivals" />
        </div>
        <div >
          <Slider {...settings}>
            <div>
              <Product
                imgsrc="assets/product_1.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div>
              <Product
                imgsrc="assets/product_2.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div>
              <Product
                imgsrc="assets/product_3.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div>
              <Product
                imgsrc="assets/product_4.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div>
              <Product
                imgsrc="assets/product_5.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Arrivals;
