import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";
import { Nav } from "./styles";
import NavMenu from "./navMenu";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 1.1 }, paused: true });

    tl.current.paused();
    tl.current
      .to(
        [
          children(".logo"),
          children(".bookNow"),
          "#hero .title",
          "#hero button",
          "#hero #features",
        ],
        {
          autoAlpha: 0,
          duration: 0.6,
          ease: "Expo.in",
        }
      )
      .to(
        children("#navMenu"),
        {
          x: 0,
          duration: 0.7,
          ease: "Expo.in",
        },
        "-=0.3"
      )
      .from(children(".menuName"), {
        stagger: 0.05,
        autoAlpha: 0,
        y: 30,
        ease: "Power1.ease",
      });
  });

  useEffect(() => {
    if (menuOpen) {
      tl.current!.play();
    } else {
      tl.current!.reverse(1.5);
    }
  }, [menuOpen]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div ref={wrapperRef}>
      <NavMenu menuOpen={menuOpen} />

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
              <span>Book Now</span>
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
