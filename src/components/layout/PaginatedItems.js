import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 11, 12, 13, 14,
  7, 8, 9, 10, 11, 12, 13, 14,1
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="xl:w-[32%] sm:w-[48%] w-full">
            <Product
              imgsrc="assets/product_2.png"
              badge={true}
              productName="Basic Crew Neck Tee"
              productPrice="$44.00"
              productColor="Black"
            />
          </div>
        ))}
    </>
  );
}

const PaginatedItems = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className=" flex flex-wrap gap-y-3.5 justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="flex items-end font-bold text-lg"
        breakLinkClassName="page-link"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        pageClassName=" border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm text-lg"
        previousClassName="hidden"
        nextClassName="hidden"
        containerClassName=" flex flex-wrap gap-y-3.5 gap-x-5 mt-12"
        activeClassName=" border border-sloid border-[#F0F0F0] py-2 px-3.5 font-dm text-lg bg-black text-white"
        renderOnZeroPageCount={null}
      />
      <p className=" lg:absolute bottom-0 mt-3 right-0 font-dm text-base text-cGrey">
        Products from {itemOffset} to {endOffset} of {items.length}
      </p>
    </>
  );
};

export default PaginatedItems;
