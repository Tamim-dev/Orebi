import React, { useEffect, useState } from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Image from "./layout/Image";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import { FaBars } from "react-icons/fa";

const Navber = () => {
    let [show, setShow] = useState(true);

    useEffect(() => {
        function scrollWidth() {
            if (window.innerWidth < 1024) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        window.addEventListener("resize", scrollWidth);
    }, []);

    return (
        <nav>
            <Container>
                <Flex className="lg:flex">
                    <div className="lg:w-2/6">
                        <Image imgsrc="assets/Logo.png" />
                    </div>
                    <div className="w-4/6">
                        <FaBars
                            onClick={() => setShow(!show)}
                            className="block lg:hidden ml-auto absolute top-2 right-2"
                        />
                        {show && (
                            <List className="lg:flex lg:gap-12 lg:font-dm text-cGrey lg;font-medium lg:text-lg mt-10 lg:mt-0">
                                <ListItem
                                    className="hover:text-black my-2.5 lg:my-0"
                                    itemname="Home"
                                />
                                <ListItem
                                    className="hover:text-black my-2.5 lg:my-0"
                                    itemname="Shop"
                                />
                                <ListItem
                                    className="hover:text-black my-2.5 lg:my-0"
                                    itemname="About"
                                />
                                <ListItem
                                    className="hover:text-black my-2.5 lg:my-0"
                                    itemname="Contacts"
                                />
                                <ListItem
                                    className="hover:text-black my-2.5 lg:my-0"
                                    itemname="Journal"
                                />
                            </List>
                        )}
                    </div>
                </Flex>
            </Container>
        </nav>
    );
};

export default Navber;
