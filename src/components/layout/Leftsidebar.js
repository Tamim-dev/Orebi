import React from "react";
import Leftsidebarheading from "./Leftsidebarheading";

const Leftsidebar = () => {
  return (
    <>
      <Leftsidebarheading dropdown={false}/>
      <Leftsidebarheading dropdown={true}/>
      <Leftsidebarheading dropdown={true}/>
      <Leftsidebarheading dropdown={false}/>
    </>
  );
};

export default Leftsidebar;
