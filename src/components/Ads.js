import React from "react";
import Container from "./layout/Container";
import Image from "./layout/Image";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <Container className="mt-3 lg:mt-32">
      <Link to="#">
        <Image imgsrc="assets/ads.png" />
      </Link>
    </Container>
  );
};

export default Ads;
