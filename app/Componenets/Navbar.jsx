 "use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dropdownRef = useRef(null);
  const subDropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(null);
      }
      if (
        subDropdownRef.current &&
        !subDropdownRef.current.contains(e.target)
      ) {
        setSubDropdown(null);
      }
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !e.target.closest(".mobile-menu-button")
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(item);
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (subItem) => {
    if (activeSubDropdown === subItem) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(subItem);
    }
  };

  const navItems = [
    { name: "HOME", href: "/" },
    {
      name: "ACADEMICS",
      submenu: [
        {
          name: "Messages",
          submenu: [
            { name: "Founder", href: "/messages/founder" },
            { name: "President", href: "/messages/president" },
            { name: "Vice-President", href: "/messages/vice-president" },
            { name: "Principal", href: "/messages/principal" },
          ],
        },
        { name: "Exam Schedules", href: "/exam-schedule" },
        {
          name: "CBSE Results",
          submenu: [
            { name: "Session 2018-19", href: "/cbse-result/session-2018-19" },
            { name: "Session 2019-20", href: "/cbse-result/session-2019-20" },
            { name: "Session 2020-21", href: "/cbse-result/session-2020-21" },
          ],
        },
        {
          name: "SCHOOL CALENDAR",
          submenu: [
            { name: "Session 2025-26", href: "/school-calender" },
     
          ],
        },
       ],
    },
    {
      name: "INFRASTRUCTURE",
      submenu: [
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Sports", href: "/sports" },
        { name: "MORE PHOTOS", href: "/more-photos" },
 
      ],
    },
    {
      name: "ACTIVITIES",
      submenu: [
        { name: "Elementary Wing", href: "/elementary-wing" },
        { name: "Primary Wing", href: "/primary-wing" },
        { name: "Clubs", href: "/activities/clubs" },
      ],
    },
    {
      name: "CBSE",
      submenu: [
        { name: "Book List", href: "/cbse/book-list" },
        { name: "Transfer Certificates", href: "/cbse/transfer-certificates" },
      ],
    },
    { name: "NEWS & EVENTS", href: "/news-and-events" },
    { name: "PUBLIC DISCLOSURE", href: "/public-disclosure" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full h-[60px] bg-black flex justify-center items-center relative">
        <div className="w-[100%] max-w-[1200px] h-[40px] flex justify-between items-center px-3">
          <div className="text-white font-bold text-md flex gap-2">
            <a
              href="mailto:channosteelmans@gmail.com"
              className="flex justify-center items-center gap-1"
            >
              <img
                width="15"
                height="10"
                src="https://img.icons8.com/material/50/FFFFFF/mail.png"
                alt="mail"
              />
              <small>channosteelmans@gmail.com</small>
            </a>
            <a
              href="tel:9888451930"
              className="flex justify-center items-center gap-1"
            >
              <img
                width="15"
                height="10"
                src="https://img.icons8.com/material-rounded/24/FFFFFF/phone--v1.png"
                alt="phone"
              />
              <small>9888451930</small>
            </a>
          </div>
          <a href="https://www.facebook.com/steelmansschool" target="_blank">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/facebook.png"
              alt="facebook"
            />
          </a>
        </div>

        {/* Main Navbar */}
        <div className="w-full h-[100px] flex justify-between items-center absolute px-7 top-[60px] z-10 bg-gradient-to-b from-black to-transparent">
          <Link href={"/"} className="h-full flex w-[40%]">
            <img
              src="/Images/logo.png"
              alt="logo"
              className="max-h-[70%] min-w-[250px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="text-white min-w-[60%] gap-5 flex justify-evenly items-center font-bold text-md  max-xl:text-xs max-lg:hidden">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link href={item.href}>
                    <small>{item.name}</small>
                  </Link>
                ) : (
                  <>
                    <small
                      className="cursor-pointer"
                      onMouseEnter={() => setDropdown(item.name)}
                    >
                      {item.name}
                    </small>

                    {dropdown === item.name && (
                      <div
                        ref={dropdownRef}
                        className="absolute left-0 top-full bg-white text-black shadow-md rounded-md w-[200px] z-20"
                        onMouseLeave={() => setDropdown(null)}
                      >
                        {item.submenu.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.href ? (
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2 hover:bg-gray-200"
                              >
                                {subItem.name}
                              </Link>
                            ) : (
                              <div
                                className="block px-4 py-2 hover:bg-gray-200 relative"
                                onMouseEnter={() =>
                                  setSubDropdown(subItem.name)
                                }
                              >
                                {subItem.name}
                                {subDropdown === subItem.name && (
                                  <div
                                    ref={subDropdownRef}
                                    className="absolute left-full top-0 bg-white text-black shadow-md rounded-md w-[200px] z-30"
                                    onMouseLeave={() => setSubDropdown(null)}
                                  >
                                    {subItem.submenu.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        href={nestedItem.href}
                                        className="block px-4 py-2 hover:bg-gray-200"
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hidden max-lg:flex items-center justify-center p-2 mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <img
            src="https://steelmansschool.com/wp-content/uploads/2020/11/logo.png"
            alt="logo"
            className="h-12"
          />
        </div>

        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                      setActiveSubDropdown(null);
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-700 rounded-md"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      {activeDropdown === item.name ? (
                        <FiChevronDown />
                      ) : (
                        <FiChevronRight />
                      )}
                    </button>

                    {activeDropdown === item.name && item.submenu && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            {subItem.href ? (
                              <Link
                                href={subItem.href}
                                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ) : (
                              <div>
                                <button
                                  className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-700 rounded-md"
                                  onClick={() =>
                                    toggleSubDropdown(subItem.name)
                                  }
                                >
                                  <span>{subItem.name}</span>
                                  {activeSubDropdown === subItem.name ? (
                                    <FiChevronDown />
                                  ) : (
                                    <FiChevronRight />
                                  )}
                                </button>

                                {activeSubDropdown === subItem.name && (
                                  <ul className="ml-4 mt-2 space-y-2">
                                    {subItem.submenu.map((nestedItem) => (
                                      <li key={nestedItem.name}>
                                        <Link
                                          href={nestedItem.href}
                                          className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                                          onClick={() => {
                                            setIsOpen(false);
                                            setActiveDropdown(null);
                                            setActiveSubDropdown(null);
                                          }}
                                        >
                                          {nestedItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"></div>
      )}
    </>
  );
}