import React from "react";

const Navbar = () => {
  return (
    <div className="absolute inset-0 w-full px-5 py-2.5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold ">HaloStudio</h1>

        <ul className="flex items-center w-1/3 justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>

        <button className="px-4 py-2 bg-black text-white rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
