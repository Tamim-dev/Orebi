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
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <section className=" lg:mt-24 mt-3">
      <Container>
        <div className=" lg:mb-12 mb-5">
          <Heading title="New Arrivals" />
        </div>
        <div>
          <Slider {...settings}>
            <div className="ipad:!w-[370px] lg:!w-[310px] sm:!w-[300px] tablet:!w-[315px] tablet2:!w-[335px]">
              <Product
                imgsrc="assets/product_1.png"
                badge={true}
                productName="Basic Crew Neck Tee"
                productPrice="$44.00"
                productColor="Black"
              />
            </div>
            <div className="ipad:!w-[370px] sm:!w-[300px] tablet:!w-[315px] tablet2:!w-[335px] lg:!w-[310px]">
              <Product
                imgsrc="assets/product_2.png"
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
                imgsrc="assets/product_4.png"
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
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Arrivals;
