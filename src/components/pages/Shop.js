import React, { useState, useEffect } from "react";
import Container from "../../components/layout/Container";
import PageHeading from "../layout/PageHeading";
import Product from "../layout/Product";
import PaginatedItems from "../layout/PaginatedItems";
import Leftsidebar from "../layout/Leftsidebar";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Shop = () => {
  let [productShow, setProductShow] = useState(12);
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 640) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <section>
      <Container>
        <PageHeading />
        <div className="mt-10 flex gap-x-3 lastDevice:relative lg:mt-24 lg:gap-x-10">
          {show && (
            <div className="left-0 top-0 z-50 lastDevice:absolute lastDevice:w-3/4 lastDevice:bg-slate-100 lastDevice:p-4 sm:relative sm:w-[25%] sm:bg-transparent sm:p-0">
              <AiOutlineCloseCircle
                className="absolute right-5 cursor-pointer text-3xl text-cdrop sm:hidden"
                onClick={() => setShow(!show)}
              />{" "}
              <Leftsidebar />
            </div>
          )}
          <div className="relative w-full sm:w-[75%]">
            <div className="mb-10 flex items-center gap-x-4 md:justify-end lg:mb-14">
              <FaBars
                onClick={() => setShow(!show)}
                className=" block cursor-pointer text-xl text-cGrey sm:hidden"
              />
              <p className="font-dm text-cGrey lg:text-lg">Sort By:</p>
              <select
                id="countries"
                class="block w-32 border border-[#F0F0F0] px-3 py-3 font-dm font-medium text-[#6D6D6D] focus:border-cGrey lg:w-60 lg:px-6 lg:text-lg"
              >
                <option selected>Featured</option>
                <option
                  value="US"
                  className="font-dm text-lg font-medium text-[#6D6D6D]"
                >
                  United States
                </option>
                <option
                  value="CA"
                  className="font-dm text-lg font-medium text-[#6D6D6D]"
                >
                  Canada
                </option>
                <option
                  value="FR"
                  className="font-dm text-lg font-medium text-[#6D6D6D]"
                >
                  France
                </option>
                <option
                  value="DE"
                  className="font-dm text-lg font-medium text-[#6D6D6D]"
                >
                  Germany
                </option>
              </select>
              <p className="font-dm text-cGrey lg:text-lg">Show:</p>
              <select
                id="countries"
                class="block w-32 border border-[#F0F0F0] px-3 py-3 font-dm font-medium text-[#6D6D6D] focus:border-cGrey lg:w-60 lg:px-6 lg:text-lg"
                onChange={(e) => setProductShow(+e.target.value)}
              >
                <option selected>12</option>
                <option
                  value="24"
                  className="font-dm font-medium text-[#6D6D6D] lg:text-lg"
                >
                  24
                </option>
                <option
                  value="48"
                  className="font-dm text-lg font-medium text-[#6D6D6D]"
                >
                  48
                </option>
              </select>
            </div>
            <PaginatedItems itemsPerPage={productShow} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
