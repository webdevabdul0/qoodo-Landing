"use client";

import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [bg, setBg] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    // Change header background on scroll
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setBg(true);
      } else {
        setBg(false);
      }

      // Detect scroll direction
      const direction = window.scrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY = window.scrollY;
    };

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        bg ? "bg-[#08081a]" : ""
      } ${scrollDirection === "down" ? "-top-24" : "top-0"}`}
    >
      <div className="w-full sm:px-[20px] xl:px-[100px] sm:py-5">
        <div className="h-[90px] pl-[30px] pr-5 py-5 rounded-[30px] flex justify-between items-center">
          <div className="justify-start items-center gap-[50px] xl:gap-[100px] flex">
            <Link href="/">LOGO</Link>
            <nav className="hidden lg:flex gap-10 font-semibold font-gilroy">
              <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <li>
                  <Link href="/#features" scroll={true}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#logs" scroll={true}>
                    Logs
                  </Link>
                </li>
                <li>
                  <Link href="/#industries" scroll={true}>
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/#standards" scroll={true}>
                    Standards
                  </Link>
                </li>
                <li>
                  <Link href="/#audit" scroll={true}>
                    Audit
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <a href="bookDemo" className="hidden lg:block">
            <div className="h-[49px] px-[25px] py-[15px] bg-[#4a60ff] rounded-[14px] border border-[#6971a2] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium leading-tight">
                Book a Demo
              </div>
              <FaChevronRight />
            </div>
          </a>

          <div
            onClick={() => setHeaderToggle((prev) => !prev)}
            className="lg:hidden cursor-pointer"
          >
            <FiMenu size={32} />
          </div>
        </div>
      </div>

      {/* Side menu for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-2/5 bg-black-100 bg-opacity-95 shadow-lg transform ${
          headerToggle ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-5 sm:p-10">
          <div
            onClick={() => setHeaderToggle(false)}
            className="cursor-pointer"
          >
            <FiX size={32} />
          </div>
        </div>
        <nav className="flex flex-col p-5">
          <ul className="flex flex-col gap-10 items-center justify-center">
            <li>
              <Link
                href="/#features"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/#logs"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                Logs
              </Link>
            </li>
            <li>
              <Link
                href="/#industries"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/#standards"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                Standards
              </Link>
            </li>
            <li>
              <Link
                href="/#audit"
                scroll={true}
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-white "
              >
                Audit
              </Link>
            </li>
            <li>
              <a
                href="bookDemo"
                onClick={() => setHeaderToggle(false)}
                className="font-semibold text-[#4A60FF] "
              >
                Book a Demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
