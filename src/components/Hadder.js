import React, { useRef, useState, useEffect } from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import Dropdwon from "./Dropdwon";

const Hadder = () => {
  let [show, setShow] = useState(false);
  let ref = useRef();

  useEffect(() => {}, []);
  document.body.addEventListener("click", (e) => {
    if (ref.current.contains(e.target)) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  return (
    <div className="bg-cbg">
      <Container>
        <Flex className="flex justify-between">
          <div>
            <Dropdwon className="relative" dropref={ref}>
              <p className="flex items-center gap-2.5 font-dm">
                <RiBarChartHorizontalFill /> Shop by Category
              </p>
              {show && (
                <List className="absolute top-8 w-[263px] bg-cdrop font-dm font-medium text-[#BEBEBE]">
                  <ListItem
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-7 hover:text-white"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-7 hover:text-white"
                    itemname="Furniture"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-7 hover:text-white"
                    itemname="Electronics"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-7 hover:text-white"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-7 hover:text-white"
                    itemname="Bags"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-7 hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdwon>
          </div>
          <div>ada</div>
          <div>ada</div>
        </Flex>
      </Container>
    </div>
  );
};

export default Hadder;
