import React from "react";
import Leftsidebarheading from "./Leftsidebarheading";
import { category, color, brands, price } from "../../data/data";

const Leftsidebar = () => {
  return (
    <>
      <Leftsidebarheading dropdown={false} droptilte="Shop by Category" data={category}/>
      <Leftsidebarheading dropdown={true} droptilte="Shop by Color" data={color}/>
      <Leftsidebarheading dropdown={true} droptilte="Shop by Brand" data={brands}/>
      <Leftsidebarheading dropdown={false} droptilte="Shop by Price" data={price}/>
    </>
  );
};

export default Leftsidebar;
