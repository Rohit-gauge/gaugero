import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/gauge-logo-red.png"

const Navbar = (props) => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      setScroll(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 top-0 w-full transition duration-500 ease-in-out lg:p-4 ${
        scroll ? "bg-white shadow-lg text-black" : ""
      }`} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center lg:mt-1">
            <Link to="/">
              <img
                src={scrollPosition > 50 ? props.blackLogo : props.redLogo}
                className={`w-full h-10 lg:px-3 ${menuOpen ? "h-8" : "h-10"}`}
                alt="mylogo"
              />
            </Link>
          </div>
          <div className="hidden md:mx-auto justify-center mt-2 lg:ml-80 lg:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`${
                  scrollPosition > 50 ? "text-black" : "text-white"
                } test-black hover:text-gray-300 px-3 py-2 rounded-md text-lg font-bold`}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={`${
                  scrollPosition > 50 ? "text-black" : "text-white"
                } test-black hover:text-gray-300 px-3 py-2 rounded-md text-lg font-bold`}
              >
                About Us
              </Link>
              <Link
                to="/contact-us-two"
                className={`${
                  scrollPosition > 50 ? "text-black" : "text-white"
                } test-black hover:text-gray-300 px-3 py-2 rounded-md text-lg font-bold`}
              >
                Contact
              </Link>
            </div>

            <div className="flex absolute right-44 top-7">
              <div className="mr-4 mt-3">
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

              <div className={`${
                  scrollPosition > 50 ? "text-black" : "text-white"
                }  hidden lg:flex lg:items-center lg:justify-end`}>
                <div >
                  <h5 className="call-details">Call us</h5>
                  <h5 >88 7278 1919</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center  rounded-md text-gray-400   ham-btn"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-white`}
        aria-expanded="false"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`${
              scrollPosition > 50 ? "text-black" : "text-gray-600"
            } hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium`}
          >
            <img width={100} src={logo} alt="logo"  />
          </Link>
          <Link
            to="/"
            className={`${
              scrollPosition > 50 ? "text-black" : "text-gray-600"
            } hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium border-b-2`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`${
              scrollPosition > 50 ? "text-black" : "text-gray-600"
            } hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium border-b-2`}
          >
            About Us
          </Link>
          <Link
            to="/contact-us-two"
            className={`${
              scrollPosition > 50 ? "text-black" : "text-gray-600"
            } hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium  border-b-2`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
