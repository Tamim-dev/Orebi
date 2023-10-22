import React from "react";
import Leftsidebarheading from "./Leftsidebarheading";

const Leftsidebar = () => {
  return (
    <>
      <Leftsidebarheading dropdown={false} droptilte="Shop by Category"/>
      <Leftsidebarheading dropdown={true} droptilte="Shop by Color"/>
      <Leftsidebarheading dropdown={true} droptilte="Shop by Brand"/>
      <Leftsidebarheading dropdown={false} droptilte="Shop by Price"/>
    </>
  );
};

export default Leftsidebar;
