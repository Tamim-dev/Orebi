import React from "react";
import { Link } from "react-router-dom";
import {TfiAngleDoubleRight} from "react-icons/tfi"

const PageHeading = () => {
  let string = window.location.pathname.split("/")[1];
  let Pagename = window.location.pathname.split("/")[1].charAt(0).toUpperCase()+string.slice(1)
  return (
    <div className="lg:mt-24 mt-10">
      <h1 className="font-dm lg:text-5xl text-3xl font-bold text-cdrop">{Pagename}</h1>
      <p className="font-dm text-sm mt-3 text-cGrey flex items-center gap-x-2">
        <Link to="/">Home</Link> <TfiAngleDoubleRight/>
        {window.location.pathname.split("/")}
      </p>
    </div>
  );
};

export default PageHeading;