import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="border-gray-200 bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-thin whitespace-nowrap text-white">
              Trend <span className="font-bold">Campus</span>
            </span>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-small flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-6  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:bg-black  ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:text-white md:p-0 transition duration-300 hover:text-red-500"
                  aria-current="page"
                >
                  The Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:text-white md:p-0 transition duration-300 hover:text-red-500"
                  aria-current="page"
                >
                  Flavours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:text-white md:p-0 transition duration-300 hover:text-red-500"
                >
                  Upcoming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:text-white md:p-0 transition duration-300 hover:text-red-500"
                >
                  On Demand
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:text-white md:p-0 transition duration-300 hover:text-red-500"
                >
                  FAQs
                </a>
              </li>
              <li className="border text-sm px-4 py-1 w-1/2 mx-auto rounded-md bg-red-500 border-transparent  md:w-auto md:bg-red-500 md:border-red-500">
                <a
                  href="#"
                  className="block py-1 px-3 text-white md:border-0 md:p-0 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start md:items-stretch md:flex-shrink-0">
                <a
                  href="#"
                  className="block py-2 px-3 text-white text-sm rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 transition duration-300 hover:text-red-500"
                >
                  <img
                    src="/images/logo.png"
                    className="h-8 w-32 md:w-auto"
                    alt="Logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
