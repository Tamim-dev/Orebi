import React from "react";
import Container from "../../components/layout/Container";
import PageHeading from "../layout/PageHeading";
import Product from "../layout/Product";
import PaginatedItems from "../layout/PaginatedItems";

const Shop = () => {
  return (
    <section>
      <Container>
        <PageHeading tilte="Products" />
        <div className="mt-10 flex gap-x-3 lg:mt-24 lg:gap-x-10">
          <div className="w-[25%] bg-red-600">fdfd</div>
          <div className="relative w-[75%]">
            <select
              id="countries"
              class="block w-60 border border-[#F0F0F0] py-3 px-6 font-dm text-lg font-medium text-[#6D6D6D] focus:border-cGrey"
            >
              <option selected>Featured</option>
              <option value="US" className="font-dm text-lg font-medium text-[#6D6D6D]">United States</option>
              <option value="CA" className="font-dm text-lg font-medium text-[#6D6D6D]">Canada</option>
              <option value="FR" className="font-dm text-lg font-medium text-[#6D6D6D]">France</option>
              <option value="DE" className="font-dm text-lg font-medium text-[#6D6D6D]">Germany</option>
            </select>
            <PaginatedItems itemsPerPage={12} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
