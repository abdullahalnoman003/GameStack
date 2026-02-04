import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="navbar bg-linear-to-r from-base-100 via-base-200 to-base-100 shadow-xl border-b border-primary/30 backdrop-blur-md fixed top-0 z-50">
      {/* Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-secondary hover:text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 border border-primary/50 rounded-lg w-52">
            <li><NavLink to="/" className="text-base-content hover:text-primary font-semibold">Home</NavLink></li>
            <li><NavLink to="/about" className="text-base-content hover:text-primary font-semibold">About</NavLink></li>
            <li><NavLink to="/games" className="text-base-content hover:text-primary font-semibold">Games</NavLink></li>
          </ul>
        </div>
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center bitcount-single  text-xl gap-1"> 
          <img src="/images/logo.png" alt="GamersIntel Logo" className="w-10 h-10"/>
          <span className="text-primary font-extrabold text-2xl">Gamers</span><span className="text-secondary font-extrabold text-2xl">Intel</span>
                  <HiLightningBolt className="text-secondary text-xl animate-pulse " />

        </NavLink>
      </div>

      {/* Center Menu - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink 
              to="/" 
              className="font-bold"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className="font-bold" 
            >
              About
            </NavLink> </li> 
            <li>
            <NavLink 
              to="/games" 
              className="font-bold" 
            >
              Games
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side - Get Started Button or User Profile */}
      <div className="navbar-end pr-5 gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <div className="w-10 rounded-full">
                <img
                  alt={user.displayName || "User"}
                  src={user.photoURL || "https://ui-avatars.com/api/?name=" + (user.displayName || "User") + "&background=9333ea&color=fff&bold=true"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow-2xl bg-base-100 border border-primary/50 rounded-lg w-50"
            >
              <li className="menu-title px-4 py-2">
                <span className="text-primary font-bold text-sm">
                  {user.displayName || "Gamer"}
                </span>
                <span className="text-base-content/50 text-xs">{user.email}</span>
              </li>
              <div className="divider my-1"></div>
              <li>
                <NavLink to="/dashboard" className="text-base-content hover:text-primary hover:bg-primary/20 transition-colors">
                  <MdDashboard className="text-lg" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="text-base-content hover:text-primary hover:bg-primary/20 transition-colors">
                  <FaUser className="text-lg" />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/messages" className="text-base-content hover:text-primary hover:bg-primary/20 transition-colors">
                  <MdMessage className="text-lg" />
                  Messages
                </NavLink>
              </li>
              <div className="divider my-1"></div>
              <li>
                <button
                  onClick={logout}
                  className="text-error hover:text-error hover:bg-error/20 transition-colors font-semibold"
                >
                  <FaSignOutAlt className="text-lg" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink  
            to="/login" 
            className="btn btn-primary border-0 font-bold uppercase tracking-wider transition-colors"
          >
            <FaUser />
            <span className="hidden sm:inline">Get Started</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
