import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <>
      <Link
        to="/"
        className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-black"
      >
        <img src={logo} alt="product ware" className="w-full h-full rounded-full" />
      </Link>
    </>
  );
};

export default Logo;
