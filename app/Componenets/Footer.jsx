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
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Facilities
                </a>
              </li>
            </ul>
          </div>

          {/* Messages Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">MESSAGES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Founder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Principal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Vice-President
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  President
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  News and Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* School Logo & Info */}
          <div className="flex flex-col items-center text-center col-span-2">
            <img
              src="https://steelmansschool.com/wp-content/uploads/2020/11/logo.png"
              alt="Steelmans Public School"
              className="w-full h-full object-contain mb-3"
            />
          </div>
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
