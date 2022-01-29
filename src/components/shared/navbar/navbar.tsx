import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";
import { Nav } from "./styles";
import NavMenu from "./navMenu";

const Navbar = () => {
  return (
    <>
      <NavMenu />

      <Nav>
        <div className="container">
          <div className="navbar__menu">
            <div
              className="menu"
              onClick={() => console.log("menu is clicked")}>
              <span>
                <RiMenu2Fill />
              </span>
              <span>Menu</span>
            </div>

            <div className="logo">
              <span>Platino</span>
              <span>Hotel - Restaurant</span>
            </div>

            <div className="bookNow">
              <span>Book Now</span>
              <span>
                <BsChevronRight />
              </span>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
