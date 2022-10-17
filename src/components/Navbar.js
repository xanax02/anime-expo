import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[70px] bg-[#090b13] p-4">
      <div className="h-full flex justify-between mx-10 text-white text-xl">
        <NavLink to="/">
          <img
            className="w-[200px] h-[40px] ml-[-45px]"
            src="/images/anime-expo-logo-square.svg"
            alt="img"
          />
        </NavLink>
        <div className="flex flex-1 justify-center ml-[-50px]">
          <NavLink to="/" className="mr-10">
            Home
          </NavLink>
          <NavLink to="/about" className="mr-10">
            About Us
          </NavLink>
          <NavLink to="/explore" className="mr-10">
            Explore
          </NavLink>
          {/* <NavLink to="/contact">Contact</NavLink> */}
        </div>
        {/* <button className="">Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
