import React from "react";
import Navber from "../Navber";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <>
      <Navber />
      <Header />
      <Outlet/>
    </>
  );
};

export default RootLayOut;
