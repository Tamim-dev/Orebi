import Container from "./layout/Container";
import React from "react";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import Image from "./layout/Image";
import {GrFacebookOption} from "react-icons/gr"
import {FaLinkedinIn,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="mt-24 bg-[#F5F5F3] py-14">
      <Container>
        <div className="flex lastDevice:max-md:flex-wrap">
          <div className="w-[15%] lastDevice:max-md:w-[33%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="w-[15%] lastDevice:max-md:w-[33%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-[20%] lastDevice:max-md:w-[33%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[30%] lastDevice:max-md:w-[70%] lastDevice:max-md:mt-6 lastDevice:max-md:mr-6">
            <div>
              <h4 className="md:mb-4 font-dm lastDevice:max-md:text-xs text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] lastDevice:max-md:text-xs">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[20%] lastDevice:max-md:w-[20%] lastDevice:max-md:mt-6">
            <Image className="lg:w-28 sm:max-lg:ml-4" imgsrc="assets/logo.png" />
          </div>
        </div>

        <div className="flex md:mt-16 mt-4 justify-between">
          <div className="flex md:text-xl md:gap-x-6 gap-x-3 items-center lastDevice:max-md:mr-4 cursor-pointer">
          <GrFacebookOption/>
          <FaLinkedinIn/>
          <FaInstagram/>
          </div>
          <div className=" justify-end lastDevice:max-md:text-xs">
            2023 Orebi Minimal eCommerce Figma Template
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
