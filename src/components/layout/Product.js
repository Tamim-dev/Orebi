import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import { AiFillHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";

const Product = ({ imgsrc, badge, productName, productPrice,productColor }) => {
  return (
    <>
      <div className="sm:flex-wrap xl:max-w-[380px] lg:max-ipad2:max-w-[320px] tablet:max-w-[340px] sm:max-md:max-w-[285px] lastDevice:max-w-[285px] group relative overflow-y-hidden ">
        <Image className="w-full h-full" imgsrc={imgsrc} />
        {badge && <Badge title="New" />}
        <div className="absolute lg:bottom-[-44%] bottom-[-60%] w-full bg-white p-6 duration-300 ease-in-out group-hover:bottom-0 ">
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
      <div className="flex mt-6 lg:mb-5 mb-2">
        <h3 className=" font-dm font-bold lg:text-xl text-cdrop lg:mr-24 mr-4 tablet:max-tablet2:text-[14px] ipad:max-ipad2:text-[16px] xl:max-2xl:mr-10">{productName}</h3>
        <p className=" font-dm lg:text-lg text-cGrey ipad:max-ipad2:text-[16px] tablet:max-tablet2:text-[14px]">{productPrice}</p>
      </div>
      <p className=" mb-2 font-dm lg:text-lg text-cGrey tablet:max-tablet2:text-[14px]">{productColor}</p>
    </>
  );
};

export default Product;
