import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./layout/Image";
import { Link } from "react-router-dom";

const Banner = () => {
  let [activeDot, setActiveDot] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setActiveDot(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "4%",
          cursor: "pointer",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === activeDot
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <Link to="#">
        <div>
          <Image imgsrc="assets/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image imgsrc="assets/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image imgsrc="assets/banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
