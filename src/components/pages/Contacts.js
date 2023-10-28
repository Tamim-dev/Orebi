import React from "react";
import Container from "../layout/Container";
import PageHeading from "../layout/PageHeading";
import Heading from "../layout/Heading";
import Inputbox from "../layout/Inputbox";
import Button from "../layout/Button"

const Contacts = () => {
  return (
    <section>
      <Container>
        <PageHeading />
        <div className="mt-10 lg:mt-24">
          <div className="mb-10">
            <Heading title="Fill up a Form" />
          </div>
          <div className=" sm:w-2/4">
            <Inputbox as="input" title="Name" placeholder="Your name here" />
            <Inputbox as="input" title="Email" placeholder="Your name here" />
            <Inputbox
              as="textarea"
              title="Message"
              placeholder="Your name here"
            />
          <Button title="Send" className="w-full mt-2"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
