import { useState } from "react";
import { Link } from "react-router-dom";

import "./MainNavbar.css";

const MainNavbar = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const handleAboutUsHover = (isHovered) => {
    setIsAboutUsOpen(isHovered);
  };

  const handleLinkClick = () => {
    setIsAboutUsOpen(false);
  };

  return (
    <div className="text-white bg-[#9C742A]">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center p-1">
        {/* Mobile Navbar Toggle */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu w-[450px] dropdown-content bg-[#9C742A] rounded-sm z-[1000] mt-3  shadow text-center -ml-5 px-10"
          >
            <li className="font-semibold text-lg">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="font-semibold text-lg">
              <details>
                <summary>About Us</summary>
                <ul className=" bg-base-100 text-black w-full  rounded-sm">
                  <li className=" hover:bg-[#9C742A] hover:text-white">
                    <Link to="/about-us" onClick={handleLinkClick}>
                      About Us
                    </Link>
                  </li>

                  <li className="-mx-2 w-3/4 underline underline-offset-1 "></li>
                  <li className=" hover:bg-[#9C742A] hover:text-white">
                    <Link
                      to="/managing-director-message"
                      onClick={handleLinkClick}
                    >
                      Managing Director's Message
                    </Link>
                  </li>
                  <li className="-mx-2 w-full underline underline-offset-1 "></li>
                  <li className=" hover:bg-[#9C742A] hover:text-white">
                    <Link to="/mission-vision" onClick={handleLinkClick}>
                      Mision & Vision
                    </Link>
                  </li>
                  <li className="-mx-2 w-full underline underline-offset-1"></li>
                </ul>
              </details>
            </li>
            <li className="font-semibold text-lg">
              <Link to="/our-companies" onClick={handleLinkClick}>
                Our Companies
              </Link>
            </li>
            <li className="font-semibold text-lg">
              <Link to="/products" onClick={handleLinkClick}>
                Products
              </Link>
            </li>

            <li className="font-semibold text-lg">
              <Link to="/gallery" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>
            <li className="font-semibold text-lg">
              <Link to="/contact-us" onClick={handleLinkClick}>
                News-Event
              </Link>
            </li>
            <li className="font-semibold text-lg">
              <Link to="/contact-us" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-center flex-grow ">
          <ul className="menu menu-horizontal px-0 text-center py-0 my-0 space-x-8">
            <li className="font-semibold text-lg">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li
              className="font-semibold text-lg relative"
              onMouseEnter={() => handleAboutUsHover(true)}
              // onMouseLeave={() => handleAboutUsHover(false)}
            >
              <details open={isAboutUsOpen}>
                <summary>About Us</summary>
                <ul
                  className="bg-base-100 text-black w-[265px] rounded-sm z-[1000] absolute about-dropdown"
                  onMouseEnter={() => handleAboutUsHover(true)}
                  onMouseLeave={() => handleAboutUsHover(false)}
                >
                  <li className="hover:bg-[#9C742A] hover:text-white">
                    <Link to="/about-us" onClick={handleLinkClick}>
                      About Us
                    </Link>
                  </li>
                  <li className="-mx-2 w-full underline underline-offset-1"></li>
                  <li className="hover:bg-[#9C742A] hover:text-white">
                    <Link
                      to="/managing-director-message"
                      onClick={handleLinkClick}
                    >
                      MD's Message
                    </Link>
                  </li>
                  <li className="-mx-2 w-full underline underline-offset-1"></li>
                  <li className="hover:bg-[#9C742A] hover:text-white">
                    <Link to="/mission-vision" onClick={handleLinkClick}>
                      Mission & Vision
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="font-semibold text-lg">
              <Link to="/our-companies" onClick={handleLinkClick}>
                Our Companies
              </Link>
            </li>
            <li className="font-semibold text-lg">
              <Link to="/products" onClick={handleLinkClick}>
                Products
              </Link>
            </li>

            <li className="font-semibold text-lg">
              <Link to="/gallery" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>

            <li className="font-semibold text-lg">
              <Link to="/news-event" onClick={handleLinkClick}>
                News Events
              </Link>
            </li>
            <li className="font-semibold text-lg">
              <Link to="/contact-us" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
