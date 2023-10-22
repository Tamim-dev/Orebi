import React from "react";
import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Leftsidebaritem = (props) => {
  let [drop, setDrop] = useState(props.subcategory);
  let [showicon, setShowicon] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShowicon(!showicon)}
          className=" flex cursor-pointer items-center justify-between border-b border-solid border-[#F0F0F0]"
        >
          <h2 className=" font-dm text-cGrey mb-5 ">{props.title}</h2>
          {showicon ? (
            <BiMinus className="text-cGrey mb-5" />
          ) : (
            <BiPlus className="text-cGrey mb-5" />
          )}
        </div>
      ) : (
        <h2 className=" font-dm text-cGrey mb-5">{props.title}</h2>
      )}

      {showicon && <div>{props.children}</div>}
    </div>
  );
};

export default Leftsidebaritem;
