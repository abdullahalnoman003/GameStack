import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <Link to="/" className="btn bg-transparent shadow-none border-transparent  text-xl gap-0"> <img src="/images/logo.png" alt="GameStack Logo" className="w-15"/>GamersIntel</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">


    </ul>
  </div>
  <div className="navbar-end">
    <NavLink  to="/login" className="btn">Get Started</NavLink>
  </div>
</div>
  );
};

export default Navbar;
