import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [mobileNavMenu, setMobileNavMenu] = useState(false);

  const handleClick = () => {
    setMobileNavMenu(!mobileNavMenu);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-gray-800">Newspaper</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block border-2 border-gray-600 rounded-lg px-2 py-1 focus:outline-none"
          onClick={handleClick}
        >
          {mobileNavMenu ? (
            <RxCross1 className="w-6 h-6 transition-transform transform rotate-180 ease-in-out duration-300" />
          ) : (
            <IoMdMenu className="w-6 h-6 transition-transform transform ease-in-out duration-300" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/updates"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
            >
              Updates
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileNavMenu && (
        <ul className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full flex flex-col items-center space-y-6 py-6 z-10 transition-all duration-300">
          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
              onClick={() => setMobileNavMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/updates"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
              onClick={() => setMobileNavMenu(false)}
            >
              Updates
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
              onClick={() => setMobileNavMenu(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 font-medium hover:text-black transition-colors duration-200"
              onClick={() => setMobileNavMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
