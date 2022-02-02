import React, { useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";
import { Nav } from "./styles";
import NavMenu from "./navMenu";
import { gsap } from "gsap/dist/gsap";
import { useNavbarMenuAnimation } from "./animations";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  const tl = useRef<gsap.core.Timeline>();

  useNavbarMenuAnimation({ firstTime, setFirstTime, children, menuOpen, tl });

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div ref={wrapperRef}>
      <NavMenu closeMenu={closeMenu} />

      <Nav>
        <div className="container">
          <div className="navbar__menu">
            <div className="menu" onClick={handleMenu}>
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
              <span>
                <span>Book</span>
                <span>Now</span>
              </span>
              <span>
                <BsChevronRight />
              </span>
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
