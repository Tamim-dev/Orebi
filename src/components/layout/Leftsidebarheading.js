import React from "react";
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Leftsidebaritem from "./Leftsidebaritem";

const Leftsidebarheading = ({ dropdown, droptilte, data }) => {
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
          {data.map((item) => (
            <Leftsidebaritem
              subcategory={item.subcategory ? true : false}
              title={item.name}
            ></Leftsidebaritem>
          ))}
        </>
      )}

      {!drop && (
        <>
          {data.map((item) => (
            <>
              <Leftsidebaritem
                subcategory={item.subcategory ? true : false}
                title={item.name}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">
                      {sitem.name}
                    </h2>
                  ))}
              </Leftsidebaritem>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Leftsidebarheading;
