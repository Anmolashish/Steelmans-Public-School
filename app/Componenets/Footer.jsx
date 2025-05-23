 "use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(100 - scrolled);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-10 relative">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* FOOTER CONTENT */}
        <div className="grid grid-cols-5 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cbse/book-list" className="hover:text-blue-400">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-blue-400">
                  Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Messages */}
          <div>
            <h3 className="text-lg font-bold mb-4">MESSAGES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/messages/founder" className="hover:text-blue-400">
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  href="/messages/principal"
                  className="hover:text-blue-400"
                >
                  Principal
                </Link>
              </li>
              <li>
                <Link
                  href="/messages/vice-president"
                  className="hover:text-blue-400"
                >
                  Vice-President
                </Link>
              </li>
              <li>
                <Link
                  href="/messages/president"
                  className="hover:text-blue-400"
                >
                  President
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news-and-events" className="hover:text-blue-400">
                  News and Events
                </Link>
              </li>
              <li>
                <Link href="/more-photos" className="hover:text-blue-400">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href={"/"}
            className="flex flex-col items-center text-center col-span-2"
          >
            <img
              src="/Images/logo.png"
              alt="Steelmans Public School"
              className="w-full h-full object-contain mb-3"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-black-700 mt-10 pt-4 text-center">
          <p className="text-sm">© 2012 Slinfy.com 2025</p>
        </div>

        {/* Scroll to Top Button */}
        {isVisible && (
          <a
            href="#"
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-gray-500 hover:bg-black-600 text-white rounded-full h-16 w-16 flex justify-center items-center shadow-2xl border-2 border-blue-400 animate-pulse transition-transform duration-300 hover:scale-110 z-50 group"
          >
            {/* Background Progress Circle */}
            <svg
              className="absolute w-16 h-16 transform -rotate-360"
              viewBox="0 0 36 36"
            >
              <path
                className="text-black-600"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
              />
              <path
                className="text-cyan-400"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
                strokeDasharray="100"
                strokeDashoffset={scrollProgress}
              />
            </svg>
            <span className="relative text-2xl font-extrabold transition-all duration-800 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        )}
      </div>
    </footer>
  );
}
