"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  return (
    <>
      <div className="w-full h-[60px] bg-black flex justify-center items-center relative ">
        <div className="w-[100%] max-w-[1200px] h-[40px] flex justify-between items-center px-3">
          <div className="text-white font-bold text-md flex gap-2">
            <small className=" flex justify-center items-center gap-1">
              <img
                width="15"
                height="10"
                src="https://img.icons8.com/material/50/FFFFFF/mail.png"
                alt="mail"
              />
              info@steelmansschool.com
            </small>
            <small className="flex justify-center items-center gap-1">
              <img
                width="15"
                height="10"
                src="https://img.icons8.com/material-rounded/24/FFFFFF/phone--v1.png"
                alt="phone--v1"
              />
              9888451930
            </small>
          </div>
          <div className="">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/facebook.png"
              alt="facebook"
            />
          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full h-[100px] flex justify-between items-center absolute px-7 top-[60px] z-10 bg-gradient-to-b from-black to-transparent">
          <div className="h-full flex w-[40%]">
            <img
              src="https://steelmansschool.com/wp-content/uploads/2020/11/logo.png"
              alt="logo"
              className="max-h-[70%] min-w-[250px]"
            />
          </div>

          {/* Navbar Links with Dropdown */}
          <div className="text-white min-w-[50%] gap-5 flex justify-evenly items-center font-bold text-sm max-lg:text-xs max-lg:hidden">
            <Link href="/">HOME</Link>

            <div
              className="relative group"
              onMouseEnter={() => setDropdown("cbse")}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link href="/">ACADEMICS </Link>
              {dropdown === "cbse" && (
                <div className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md overflow-hidden w-[200px]">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Messages
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Exam Schedules
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    CBSE Results
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    SCHOOL CALENDAR
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setDropdown("infrastructure")}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link href="/">INFRASTRUCTURE</Link>
              {dropdown === "infrastructure" && (
                <div className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md w-[200px] overflow-hidden">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Infrastructure
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Sports
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    MORE PHOTOS
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Public Discloser
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setDropdown("activities")}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link href="/">ACTIVITIES</Link>
              {dropdown === "activities" && (
                <div className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md overflow-hidden w-[200px]">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Elementary Wing
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Primary Wing
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Clubs
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setDropdown("academics")}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link href="/">CBSE</Link>
              {dropdown === "academics" && (
                <div className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md overflow-hidden w-[200px]">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Book List
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                    Transfer Certificates
                  </Link>
                </div>
              )}
            </div>
            <Link href="/">NEWS & EVENTS</Link>
            <Link href="/">CONTACT US</Link>
          </div>

          {/* Mobile Menu */}
          <div className="hidden max-lg:flex max-md:justify-center cursor-pointer">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
