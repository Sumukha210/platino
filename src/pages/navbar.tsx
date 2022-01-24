import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div style={{ margin: "8rem" }}>
      <h5>
        <Link href="/">Home</Link>
      </h5>
      <h5>
        <Link href="/about">about</Link>
      </h5>
      <h5>
        <Link href="/blog">Blog</Link>
      </h5>
      <h5>
        <Link href="/contact">contact us</Link>
      </h5>
    </div>
  );
};

export default Navbar;
