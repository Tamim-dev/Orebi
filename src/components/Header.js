import React, { useRef, useState, useEffect } from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import Dropdwon from "./Dropdwon";
import Search from "./Search";
import Image from "./layout/Image";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryDropDwon, setCategoryDropDwon] = useState(false);
  let [userLoginDropDwon, setUserLoginDropDwon] = useState(false);
  let [cartDropDwon, setCartDropDwon] = useState(false);

  let categoryref = useRef();
  let userLoginref = useRef();
  let cartref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryref.current.contains(e.target)) {
        setCategoryDropDwon(true);
      } else {
        setCategoryDropDwon(false);
      }

      if (userLoginref.current.contains(e.target)) {
        setUserLoginDropDwon(true);
      } else {
        setUserLoginDropDwon(false);
      }

      if (cartref.current.contains(e.target)) {
        setCartDropDwon(true);
      } else {
        setCartDropDwon(false);
      }
    });
  }, []);

  return (
    <div className="bg-cbg lg:py-5">
      <Container>
        <Flex className="flex justify-between">
          <div className=" self-center">
            <Dropdwon className="relative cursor-pointer" dropref={categoryref}>
              <p className="flex items-center gap-2.5 font-dm">
                <RiBarChartHorizontalFill className=" lg:text-2xl" /> <span className=" hidden lg:inline-block">Shop by
                Category</span>
              </p>
              {categoryDropDwon && (
                <List className="absolute top-8 w-[263px] bg-cdrop font-dm font-medium text-[#BEBEBE] z-[1]">
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-7 hover:text-white"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-7 hover:text-white"
                    itemname="Furniture"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-7 hover:text-white"
                    itemname="Electronics"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-7 hover:text-white"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-7 hover:text-white"
                    itemname="Bags"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-7 hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdwon>
          </div>
          <div className="relative lg:w-[601px]">
            <Search
              className="w-full px-5 py-4 placeholder:font-dm"
              placeholder="Search Products"
            />
            <FaSearch className=" absolute right-4 top-[22px]" />
          </div>
          <div className=" self-center">
            <Flex className="flex lg:gap-x-10 gap-x-3">
              <div>
                <Dropdwon className="relative z-50 cursor-pointer" dropref={userLoginref}>
                  <div className="flex">
                    <BsFillPersonFill className=" lg:text-2xl" />
                    <RxTriangleDown className=" lg:text-2xl" />
                  </div>
                  {userLoginDropDwon && (
                    <List className="absolute right-0 top-8 w-[200px] border border-solid border-[#e2e2e2] bg-white text-center font-dm font-medium drop-shadow-lg">
                      <ListItem
                        className="border-b border-solid border-[#e2e2e2] px-5 py-4 font-dm duration-300 ease-in hover:bg-cdrop hover:text-white"
                        itemname="My Account"
                      />
                      <ListItem
                        className="px-5 py-4 font-dm duration-300 ease-in hover:bg-cdrop hover:text-white"
                        itemname="Log Out"
                      />
                    </List>
                  )}
                </Dropdwon>
              </div>
              <div className="">
                <Dropdwon className="relative z-50 cursor-pointer" dropref={cartref}>
                  <FaShoppingCart className=" lg:text-2xl" />
                  {cartDropDwon && (
                    <div className="absolute right-0 top-8 w-[380px] border border-solid border-[#e2e2e2] bg-white drop-shadow-lg">
                      <div className=" flex p-5">
                        <Image imgsrc="assets/cartimg.png" />
                        <div className=" ml-5 w-10/12 self-center font-dm font-bold">
                          <h2>Black Smart Watch</h2>
                          <h2 className=" mt-3">$44.00</h2>
                        </div>
                        <div className="flex w-2/12 justify-end self-center">
                          <ImCross className=" text-sm text-cdrop" />
                        </div>
                      </div>
                      <div className=" p-5 font-dm bg-cbg">
                        <h2 className=" text-base font-bold text-cGrey">
                          Subtotal: $44.00
                        </h2>
                        <div className="mt-3 flex gap-x-5">
                          <Link className=" border border-solid border-cdrop bg-cdrop px-10 py-4 font-bold text-white duration-300 ease-in hover:bg-white hover:text-black">
                            View Cart
                          </Link>
                          <Link className=" border border-solid border-cdrop bg-cdrop px-9 py-4 font-bold text-white duration-300 ease-in hover:bg-white hover:text-black">
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropdwon>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
