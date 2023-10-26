import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import { AiFillHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";

const Product = ({ imgsrc, badge, productName, productPrice,productColor }) => {
  return (
    <>
      <div className=" group relative overflow-y-hidden">
        <Image className="w-full h-full" imgsrc={imgsrc} />
        {badge && <Badge title="New" />}
        <div className="absolute ipad:bottom-[-44%] bottom-[-60%] xl:bottom-[-55%] w-full bg-white p-6 duration-300 ease-in-out group-hover:bottom-0 ">
          <div className="flex cursor-pointer items-center justify-end gap-x-4">
            <p className=" font-dm text-base text-cGrey hover:text-cdrop">
              Add to Wish List
            </p>
            <AiFillHeart className=" text-lg text-cdrop" />
          </div>
          <div className="lg:my-5 my-2 flex cursor-pointer items-center justify-end gap-x-4">
            <p className=" font-dm text-base text-cGrey hover:text-cdrop">
              Compare
            </p>
            <BiGitCompare className=" text-lg text-cdrop" />
          </div>
          <div className="flex cursor-pointer items-center justify-end gap-x-4 ">
            <p className=" font-dm text-base text-cGrey hover:text-cdrop">
              Add to Cart
            </p>
            <BsFillCartFill className=" text-lg text-cdrop" />
          </div>
        </div>
      </div>
      <div className="flex mt-6 lg:mb-5 mb-2 justify-between">
        <h3 className=" font-dm font-bold ipad:text-xl text-cdrop tablet:max-tablet2:text-[14px] ipad:max-ipad2:text-base">{productName}</h3>
        <p className=" font-dm lg:text-lg text-cGrey ipad:max-ipad2:text-base tablet:max-tablet2:text-[14px]">{productPrice}</p>
      </div>
      <p className=" mb-2 font-dm lg:text-lg text-cGrey tablet:max-tablet2:text-[14px]">{productColor}</p>
    </>
  );
};

export default Product;
