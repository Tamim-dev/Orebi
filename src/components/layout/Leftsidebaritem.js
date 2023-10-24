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
          className="flex cursor-pointer items-center justify-between relative"
        >
          <h2 className="border-b w-full border-solid border-[#F0F0F0] py-5 font-dm text-cGrey ">
            {props.color && (
              <span
                className=" mr-3 inline-block h-3 w-3 rounded-full"
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </h2>
          {showicon ? (
            <BiMinus className=" text-cGrey absolute right-0" />
          ) : (
            <BiPlus className=" text-cGrey absolute right-0" />
          )}
        </div>
      ) : (

          <h2 className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-cGrey">{props.color && (
            <span
              className=" mr-3 inline-block h-3 w-3 rounded-full"
              style={{ background: props.color }}
            ></span>
          )}
          {props.title}</h2>
        
      )}

      {showicon && <div>{props.children}</div>}
    </div>
  );
};

export default Leftsidebaritem;
