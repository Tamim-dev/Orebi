import React from "react";
import Leftsidebarheading from "./Leftsidebarheading";

const Leftsidebar = () => {
  return (
    <div>
      <Leftsidebarheading lsbheading="Shop by Category"/>
      <Leftsidebarheading lsbheading="Shop by Color"/>
      <Leftsidebarheading lsbheading="Shop by Brand"/>
      <Leftsidebarheading lsbheading="Shop by Price"/>
    </div>
  );
};

export default Leftsidebar;
