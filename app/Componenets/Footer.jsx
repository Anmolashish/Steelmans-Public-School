import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="grid grid-cols-5 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          {/* Company Section */}
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
                <Link href="/infrastucture" className="hover:text-blue-400">
                  Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Messages Section */}
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

          {/* Links Section */}
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

          {/* School Logo & Info */}
          <Link
            href={"/"}
            className="flex flex-col items-center text-center col-span-2"
          >
            <img
              src="https://steelmansschool.com/wp-content/uploads/2020/11/logo.png"
              alt="Steelmans Public School"
              className="w-full h-full object-contain mb-3"
            />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-sm">© 2012 Slinfy.com 2025</p>
        </div>

        {/* Scroll to Top Button */}
        <a
          href="#"
          className="fixed bottom-5 right-5 bg-gray-700 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition duration-300 h-12 flex justify-center items-center text-center w-12"
        >
          ^
        </a>
      </div>
    </footer>
  );
}
