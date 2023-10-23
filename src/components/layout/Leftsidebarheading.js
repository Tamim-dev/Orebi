import React from "react";
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Leftsidebaritem from "./Leftsidebaritem";

const Leftsidebarheading = ({ dropdown, droptilte }) => {
  let [drop, setDrop] = useState(dropdown);
  let [showicon, setShowicon] = useState(dropdown);

  return (
    <div className=" mb-12">
      {drop ? (
        <div
          onClick={() => setShowicon(!showicon)}
          className=" mb-12 flex cursor-pointer items-center justify-between"
        >
          <h2 className=" font-dm text-xl font-bold text-cdrop ">
            {droptilte}
          </h2>
          {showicon ? (
            <GoTriangleUp className=" font-dm text-xl font-bold text-cdrop " />
          ) : (
            <GoTriangleDown className=" font-dm text-xl font-bold text-cdrop " />
          )}
        </div>
      ) : (
        <div>
          <h2 className=" mb-12 font-dm text-xl font-bold text-cdrop">
            {droptilte}
          </h2>
        </div>
      )}
      {showicon && (
        <>
          <Leftsidebaritem subcategory={true} title="Category 1" color="black">
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 2"
            color="#FF8686"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 3"
            color="#7ED321"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 4"
            color="#B6B6B6"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 5"
            color="#15CBA5"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
        </>
      )}

      {!drop && (
        <>
          <Leftsidebaritem subcategory={true} title="Category 1" color="black">
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 2"
            color="#FF8686"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 3"
            color="#7ED321"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 4"
            color="#B6B6B6"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
          <Leftsidebaritem
            subcategory={true}
            title="Category 5"
            color="#15CBA5"
          >
            <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
              Item 1
            </h2>
          </Leftsidebaritem>
        </>
      )}
    </div>
  );
};

export default Leftsidebarheading;
