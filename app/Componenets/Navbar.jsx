 "use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (subItem) => {
    setActiveSubDropdown(activeSubDropdown === subItem ? null : subItem);
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
            { name: "Session 2024-25", href: "/cbse-result/session-2020-21" },
          ],
        },
        { name: "SCHOOL CALENDAR", href: "/school-calender" },
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
      <div className="w-full bg-black text-white px-4 py-2 flex justify-between items-center flex-wrap">
        {/* Contact Email & Phone */}
        <div className="flex flex-col ">
          <a
            href="mailto:steelmansschool6@gmail.com"
            className="flex gap-2 items-center"
          >
            <img
              width="18"
              src="https://img.icons8.com/material/50/FFFFFF/mail.png"
              alt="mail"
            />
            <span>steelmansschool6@gmail.com</span>
          </a>
          <a href="tel:9888451930" className="flex gap-2 items-center">
            <img
              width="18"
              src="https://img.icons8.com/material-rounded/24/FFFFFF/phone--v1.png"
              alt="phone"
            />
            <span>9888451930</span>
          </a>
        </div>

        {/* Logo Centered ONLY on md and up */}
        <div className="hidden md:flex flex-1 justify-center  ">
          <Link href="/">
            <img
              src="/Images/logo.png"
              alt="logo"
              className="h-74 max-h-[104px] object-contain"
            />
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <a
            href="https://www.facebook.com/share/16E3V3jbhM/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluency/48/facebook.png"
              alt="facebook"
              className="w-10 h-10 object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/steelmans.public.school?igsh=YW9maGYza2Jna2Fw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png"
              alt="instagram"
              className="w-16 h-16 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className="bg-black text-white shadow-md text-[16px] font-semibold relative z-50"
        ref={navRef}
      >
        {/* Mobile Hamburger & Logo on left ONLY on mobile */}
        <div className="flex justify-between items-center px-4 py-3 md:hidden">
          <Link href="/">
            <img
              src="/Images/logo.png"
              alt="logo"
              className="h-10 object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-6 py-4">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-400">
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="hover:text-blue-400 flex items-center gap-1"
                >
                  {item.name}
                  <FiChevronDown className="text-xs" />
                </button>
              )}

              {/* Dropdown Menu */}
              {item.submenu && activeDropdown === item.name && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black border rounded shadow-lg w-56 z-20">
                  {item.submenu.map((subItem, subIdx) => (
                    <li key={subIdx} className="relative group">
                      {subItem.href ? (
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => toggleSubDropdown(subItem.name)}
                          className="flex justify-between w-full px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.name}
                          <FiChevronRight className="text-xs" />
                        </button>
                      )}

                      {/* Sub-Submenu */}
                      {subItem.submenu && activeSubDropdown === subItem.name && (
                        <ul className="absolute left-full top-0 ml-1 bg-white text-black border rounded shadow-lg w-56 z-30">
                          {subItem.submenu.map((deepItem, deepIdx) => (
                            <li key={deepIdx}>
                              <Link
                                href={deepItem.href}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {deepItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="flex flex-col bg-black text-white px-4 py-4 gap-2 md:hidden">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-gray-700">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full flex justify-between items-center py-2 hover:text-blue-400"
                    >
                      {item.name}
                      <FiChevronDown
                        className={`transform transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {item.submenu && activeDropdown === item.name && (
                      <ul className="pl-4">
                        {item.submenu.map((subItem, subIdx) => (
                          <li key={subIdx} className="border-b border-gray-700">
                            {subItem.href ? (
                              <Link
                                href={subItem.href}
                                className="block py-2 hover:text-blue-400"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ) : (
                              <>
                                <button
                                  onClick={() =>
                                    setActiveSubDropdown(
                                      activeSubDropdown === subItem.name
                                        ? null
                                        : subItem.name
                                    )
                                  }
                                  className="w-full flex justify-between items-center py-2 hover:text-blue-400"
                                >
                                  {subItem.name}
                                  <FiChevronRight
                                    className={`transform transition-transform duration-200 ${
                                      activeSubDropdown === subItem.name
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                </button>
                                {subItem.submenu &&
                                  activeSubDropdown === subItem.name && (
                                    <ul className="pl-6">
                                      {subItem.submenu.map(
                                        (deepItem, deepIdx) => (
                                          <li
                                            key={deepIdx}
                                            className="border-b border-gray-700"
                                          >
                                            <Link
                                              href={deepItem.href}
                                              className="block py-2 hover:text-blue-400"
                                              onClick={() =>
                                                setMobileMenuOpen(false)
                                              }
                                            >
                                              {deepItem.name}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
