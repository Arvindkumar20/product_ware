import React, { useState } from "react";
import { Link } from "react-router-dom";
// import img from "../assets/react.svg"
const Logo = ({ logo }) => {


//   const [image,setImage]=useState(logo);

// const   handleimageSet=()=>{
//   setImage(()=>logo?img:logo);
// }

  return (
    <>
     {/* <button onClick={handleimageSet}> */}
     <Link
        to="/"
        className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-black"
      >
        <img src={logo} alt="product ware" className="w-full h-full rounded-full " />
      </Link>
     {/* </button> */}
    </>
  );
};

export default Logo;
