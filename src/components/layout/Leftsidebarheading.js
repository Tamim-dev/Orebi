import React from "react";
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Leftsidebaritem from "./Leftsidebaritem";

const Leftsidebarheading = ({ dropdown,droptilte}) => {
  let [drop, setDrop] = useState(dropdown);
  let [showicon, setShowicon] = useState(dropdown);

  return (
    <div className=" mb-12">
      {drop ? (
        <div
          onClick={() => setShowicon(!showicon)}
          className=" flex cursor-pointer items-center justify-between mb-12"
        >
          <h2 className=" font-dm text-xl font-bold text-cdrop ">
            {droptilte}
          </h2>
          {showicon ? <GoTriangleUp className=" font-dm text-xl font-bold text-cdrop "/> : <GoTriangleDown className=" font-dm text-xl font-bold text-cdrop "/>}
        </div>
      ) : (
        <div>
          <h2 className=" font-dm text-xl font-bold text-cdrop mb-9">
          {droptilte}
        </h2>
        </div>
        
      )}
      {showicon && (
        <>
          <Leftsidebaritem subcategory={true} title="Category 1">
            <h2 className="font-dm text-cGrey py-5 border-b border-solid border-[#F0F0F0]">dfdfdsafdsfdsfd</h2>
          </Leftsidebaritem>
        </>
      )}

      {!drop && (
        <>
          <Leftsidebaritem subcategory={true} title="Category 1">
            <h2 className=" font-dm text-cGrey py-5 border-b border-solid border-[#F0F0F0]">dfdfdsafdsfdsfd</h2>
          </Leftsidebaritem>
        </>
      )}
    </div>
  );
};

export default Leftsidebarheading;
