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

        <div className="mt-24 flex gap-x-10">
          <div className="w-[25%] bg-red-600">fdfd</div>
          <div className="w-[75%] relative">
            <PaginatedItems itemsPerPage={12} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
