import React, { useState,useEffect } from "react";
import Container from "../../components/layout/Container";
import PageHeading from "../layout/PageHeading";
import Product from "../layout/Product";
import PaginatedItems from "../layout/PaginatedItems";
import Leftsidebar from "../layout/Leftsidebar";
import {FaBars} from "react-icons/fa"
import {AiOutlineCloseCircle} from "react-icons/ai"

const Shop = () => {
  let [productShow, setProductShow] = useState(12);
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
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
        <PageHeading/>
        <div className="mt-10 flex gap-x-3 lastDevice:relative lg:mt-24 lg:gap-x-10">
          {show && <div className="sm:w-[25%] sm:relative lastDevice:absolute top-0 left-0 z-50 lastDevice:bg-slate-100 sm:bg-transparent lastDevice:p-4 sm:p-0 lastDevice:w-3/4"><AiOutlineCloseCircle className="cursor-pointer text-3xl text-cdrop sm:hidden absolute right-5" onClick={() => setShow(!show)}/> <Leftsidebar/></div>}
          <div className="relative w-full sm:w-[75%]">
            <div className="lg:mb-14 mb-10 flex items-center md:justify-end gap-x-4">
              <FaBars onClick={() => setShow(!show)} className=" text-xl lastDevice:block text-cGrey sm:hidden cursor-pointer"/>
              <p className="font-dm lg:text-lg text-cGrey">Sort By:</p>
              <select
                id="countries"
                class="block w-32 lg:w-60 border border-[#F0F0F0] lg:px-6 px-3 py-3 font-dm lg:text-lg font-medium text-[#6D6D6D] focus:border-cGrey"
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
              <p className="font-dm text-lg text-cGrey">Show:</p>
              <select
                id="countries"
                class="block lg:w-60 w-32 border border-[#F0F0F0] lg:px-6 px-3 py-3 font-dm lg:text-lg font-medium text-[#6D6D6D] focus:border-cGrey"
                onChange={(e) => setProductShow(+e.target.value)}
              >
                <option selected>12</option>
                <option
                  value="24"
                  className="font-dm lg:text-lg font-medium text-[#6D6D6D]"
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
