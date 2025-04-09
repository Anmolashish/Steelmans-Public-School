"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function MorePhotos() {
  // NASA Trip images
  const nasaImages = [
    {
      src: "https://steelmansschool.com/wp-content/uploads/2019/03/ArtCraft_2019007-440x440.jpg",
      alt: "Students participating in art and craft activities during NASA trip",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2019/03/PATH_2019003-1-440x440.jpg",
      alt: "Students exploring science exhibits at NASA",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1602-440x440.jpg",
      alt: "Group photo of students during NASA visit",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1611-440x440.jpg",
      alt: "Students interacting with NASA exhibits",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1604-440x440.jpg",
      alt: "Students learning about space technology",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/independence_day-1-440x440.jpg",
      alt: "NASA trip cultural celebration",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/independence_day-3-440x440.jpg",
      alt: "Students performing during NASA trip event",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/Tiger_day-8-440x440.jpg",
      alt: "Special activities during NASA visit",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            NASA Trip Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our students' memorable journey to NASA
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nasaImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[70vh] object-contain"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-800">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
