import React from "react";
import Navber from "../Navber";
import Header from "../Header";
import Footer from "../Footer"
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <>
      <Navber />
      <Header />
      <Outlet/>
      <Footer/>
    </>
  );
};

export default RootLayOut;
