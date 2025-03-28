"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);

  // References for dropdown and sub-dropdown to prevent disappearance
  const dropdownRef = useRef(null);
  const subDropdownRef = useRef(null);

  // Close dropdowns only when clicking outside the entire menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        subDropdownRef.current &&
        !subDropdownRef.current.contains(e.target)
      ) {
        setDropdown(null);
        setSubDropdown(null);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full h-[60px] bg-black flex justify-center items-center relative">
        <div className="w-[100%] max-w-[1200px] h-[40px] flex justify-between items-center px-3">
          <div className="text-white font-bold text-md flex gap-2">
            <small className="flex justify-center items-center gap-1">
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
                alt="phone"
              />
              9888451930
            </small>
          </div>
          <div>
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

          {/* Navbar Links */}
          <div className="text-white min-w-[50%] gap-5 flex justify-evenly items-center font-bold text-sm max-lg:text-xs max-lg:hidden">
            <Link href="/">HOME</Link>

            {/* ACADEMICS */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdown("academics")}
              onMouseLeave={() => setDropdown(null)}
            >
              <p className="flex items-center">ACADEMICS</p>

              {dropdown === "academics" && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md w-[200px] z-20"
                >
                  <div
                    className="block px-4 py-2 hover:bg-gray-200 relative"
                    onMouseEnter={() => setSubDropdown("messages")}
                    onMouseLeave={() => setSubDropdown(null)}
                  >
                    Messages
                  </div>

                  {/* Sub-dropdown with proper gap */}
                  {subDropdown === "messages" && (
                    <div
                      ref={subDropdownRef}
                      onMouseEnter={() => setSubDropdown("messages")}
                      onMouseLeave={() => setSubDropdown(null)}
                      className="absolute left-full top-0 bg-white text-black shadow-md rounded-md w-[200px] z-30"
                    >
                      <Link
                        href="/messages/founder"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Founder
                      </Link>
                      <Link
                        href="/messages/president"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        President
                      </Link>
                      <Link
                        href="/messages/vice-president"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Vice-President
                      </Link>
                      <Link
                        href="/messages/principal"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Principal
                      </Link>
                    </div>
                  )}

                  <Link
                    href="/exam-schedule"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Exam Schedules
                  </Link>

                  <div
                    className="block px-4 py-2 hover:bg-gray-200 relative"
                    onMouseEnter={() => setSubDropdown("cbse-result")}
                    onMouseLeave={() => setSubDropdown(null)}
                  >
                    CBSE Results
                  </div>

                  {/* Sub-dropdown with proper gap */}
                  {subDropdown === "cbse-result" && (
                    <div
                      ref={subDropdownRef}
                      onMouseEnter={() => setSubDropdown("cbse-result")}
                      onMouseLeave={() => setSubDropdown(null)}
                      className="absolute left-full bottom-0 bg-white text-black shadow-md rounded-md w-[200px] z-30"
                    >
                      <Link
                        href="/cbse-result/session-2018-19"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Session 2018-19
                      </Link>
                      <Link
                        href="/cbse-result/session-2019-20"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Session 2019-20
                      </Link>
                      <Link
                        href="/cbse-result/session-2020-21"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Session 2020-21
                      </Link>
                    </div>
                  )}
                  <Link
                    href="/school-calender"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    SCHOOL CALENDAR
                  </Link>
                </div>
              )}
            </div>

            {/* INFRASTRUCTURE */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdown("infrastructure")}
              onMouseLeave={() => setDropdown(null)}
            >
              <div>INFRASTRUCTURE</div>
              {dropdown === "infrastructure" && (
                <div className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md w-[200px] z-20">
                  <Link
                    href="/infrastructure"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Infrastructure
                  </Link>
                  <Link
                    href="/sports"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Sports
                  </Link>
                  <Link
                    href="/more-photos"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    MORE PHOTOS
                  </Link>
                </div>
              )}
            </div>

            {/* ACTIVITIES */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdown("activities")}
              onMouseLeave={() => setDropdown(null)}
            >
              <p className="flex items-center">ACTIVITIES</p>
              {dropdown === "activities" && (
                <div className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md w-[200px]">
                  <Link
                    href="/elementary-wing"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Elementary Wing
                  </Link>
                  <Link
                    href="/primary-wing"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Primary Wing
                  </Link>
                  <Link
                    href="/activities/clubs"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Clubs
                  </Link>
                </div>
              )}
            </div>

            {/* CBSE */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdown("cbse")}
              onMouseLeave={() => setDropdown(null)}
            >
              <p>CBSE</p>
              {dropdown === "cbse" && (
                <div className="absolute left-0 top-[100%] bg-white text-black shadow-md rounded-md w-[200px] z-10">
                  <Link
                    href="/cbse/book-list"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Book List
                  </Link>
                  <Link
                    href="/cbse/transfer-certificates"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Transfer Certificates
                  </Link>
                </div>
              )}
            </div>

            <Link href="/news-and-events">NEWS & EVENTS</Link>
            <Link href="/public-discloser">PUBLIC DISCLOSER</Link>
            <Link href="/contact">CONTACT US</Link>
          </div>

          {/* Mobile Menu */}
          <div className="hidden max-lg:flex max-md:justify-center cursor-pointer">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
              alt="menu"
            />
          </div>
        </div>
      </div>
    </>
  );
}
