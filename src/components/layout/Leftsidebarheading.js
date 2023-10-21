import React from "react";
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Leftsidebaritem from "./Leftsidebaritem";

const Leftsidebarheading = ({ dropdown }) => {
  let [drop, setDrop] = useState(dropdown);
  let [showicon, setShowicon] = useState(false);

  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShowicon(!showicon)}
          className=" flex cursor-pointer items-center justify-between"
        >
          <h2 className=" font-dm text-xl font-bold text-cdrop">
            Shop by Category
          </h2>
          {showicon ? <GoTriangleDown /> : <GoTriangleUp />}
        </div>
      ) : (
        <h2 className=" font-dm text-xl font-bold text-cdrop">
          Shop by Category
        </h2>
      )}

      {showicon && (
        <>
          <Leftsidebaritem subcategory={true}/>
          <Leftsidebaritem subcategory={false}/>
          <Leftsidebaritem subcategory={true}/>
          <Leftsidebaritem subcategory={false}/>
          <Leftsidebaritem subcategory={false}/>
        </>
      )}
    </div>
  );
};

export default Leftsidebarheading;
