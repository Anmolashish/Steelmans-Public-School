"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12">
      <div className="container max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">CONTACT INFO</h2>
            <p className="text-gray-600">
              Welcome to our Website. We are glad to have you around.
            </p>

            <hr className="border-gray-300" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffa500/phone.png"
                  alt="phone"
                  className="w-6 h-6"
                />
                <span className="text-lg font-medium">9888451930</span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffa500/email.png"
                  alt="email"
                  className="w-6 h-6"
                />
                <span className="text-lg font-medium">

                  steelmansschool6@gmail.com

                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffa500/marker.png"
                  alt="location"
                  className="w-6 h-6"
                />
                <div>
                  <h4 className="text-lg font-medium">Address</h4>
                  <p className="text-gray-600">
                    Patiala-Sangrur Road, Channo, District Sangrur
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="border rounded-md overflow-hidden">
                <iframe
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440047.6827902202!2d76.16940149206435!3d30.49635796982999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910314ad3cc605d%3A0x7de21454ace56a39!2sSteelmans+Public+School!5e0!3m2!1sen!2sin!4v1564213695993!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  frameBorder="0"
                  allowFullScreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Send a Message Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">SEND A MESSAGE</h2>
            <p className="text-gray-600">
              Your email address will not be published. Required fields are
              marked.
            </p>

            <hr className="border-gray-300" />

            <form className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="border p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="border p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject *"
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
                required
              />

              {/* Message */}
              <textarea
                placeholder="Message *"
                rows="6"
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
