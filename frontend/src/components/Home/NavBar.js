import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-gray-600 body-font navbar">
      <div className="container mx-auto flex lg:p-3 pt-3 items-center lg:px-24">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src={props.logo}
            className={`w-full h-10 lg:px-3 ${menuOpen ? "h-8" : "h-10"}`}
            alt="mylogo"
          />
        </Link>
        <button
          className="inline-flex p-3 rounded lg:hidden ml-auto hamburger-icon"
          onClick={toggleMenu}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`${menuOpen ? "hidden" : "block"} w-6 h-6`}
          >
            <path
              fillRule="evenodd"
              d="M2 4h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`${menuOpen ? "block" : "hidden"} w-6 h-6`}
          >
            <path
              fillRule="evenodd"
              d="M14.293 5.293a1 1 0 0 0-1.414-1.414L9 8.586 4.121 3.707a1 1 0 0 0-1.414 1.414L7.586 10l-4.879 4.879a1 1 0 1 0 1.414 1.414L9 11.414l4.879 4.879a1 1 0 0 0 1.414-1.414L10.414 10l4.879-4.879z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <nav
          className={`md:ml-auto md:mr-auto lg:mr-80 flex justify-center lg:block ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="mr-8 text-white font-semibold text-base cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="mr-8 text-white font-semibold text-base  cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/contact-us-two"
            className="mr-8 text-white font-semibold text-base   cursor-pointer"
          >
            ContactUs
          </Link>
        </nav>

        <div className="border-l border-gray-700 pl-4 hidden lg:block xl:block mr-12 leading-7">
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 call-us-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>
            <div className="text-white">
              <h5 className="  call-details">Call us</h5>
              <h5 className="text-white ">88 7278 1919</h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
