import React from "react";
import { useState } from "react";
import { BiPlus,BiMinus } from "react-icons/bi";

const Leftsidebaritem = ({subcategory}) => {
  let [drop, setDrop] = useState(subcategory);
  let [showicon, setShowicon] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShowicon(!showicon)}
          className=" flex cursor-pointer items-center justify-between"
        >
          <h2>
            Category 1
          </h2>
          {showicon ? <BiMinus /> : <BiPlus/>}
        </div>
      ) : (
        <h2>
          Category 1
        </h2>
      )}

      {showicon && (
        <div>
          <p>dfdsfds</p>
          <p>dfdsfds</p>
          <p>dfdsfds</p>
          <p>dfdsfds</p>
          <p>dfdsfds</p>
        </div>
      )}
    </div>
  );
};

export default Leftsidebaritem;
