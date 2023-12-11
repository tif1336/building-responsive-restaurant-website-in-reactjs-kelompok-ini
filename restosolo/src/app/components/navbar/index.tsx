import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <>
      <header className="bg-primary fixed top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <span
                
                className="font-bold text-lg text-white block py-6"
              >
                Resto Solo
              </span>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out origin-top-left"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#"
                      className="text-base py-2 mx-8 flex hover:text-orange-500"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base py-2 mx-8 flex hover:text-orange-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base py-2 mx-8 flex hover:text-orange-500"
                    >
                      Menu
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base py-2 mx-8 flex hover:text-orange-500"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base py-2 mx-8 flex hover:text-orange-500"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base py-2 mx-8 flex hover:text-orange-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
