import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex  justify-evenly p-4 text-black font-semibold bg-red-300 hover:bg-red-400 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/signout">SignOut</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">SIGN UP</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
