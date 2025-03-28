"use client";
import React, { useState } from "react";

export default function MorePhotos() {
  // Gallery categories
  const categories = [
    "ALL",
    "ART & CRAFT ACTIVITY",
    "NEW SESSION PATH",
    "NASA TRIP",
    "INDEPENDENCE DAY",
    "INTERNATIONAL TIGER DAY",
  ];

  // Image data with category mapping
  const images = [
    {
      src: "https://steelmansschool.com/wp-content/uploads/2019/03/ArtCraft_2019007-440x440.jpg",
      category: "ART & CRAFT ACTIVITY",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2019/03/PATH_2019003-1-440x440.jpg",
      category: "NEW SESSION PATH",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1602-440x440.jpg",
      category: "NASA TRIP",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1611-440x440.jpg",
      category: "NASA TRIP",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1604-440x440.jpg",
      category: "NASA TRIP",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/independence_day-1-440x440.jpg",
      category: "INDEPENDENCE DAY",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/independence_day-3-440x440.jpg",
      category: "INDEPENDENCE DAY",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/Tiger_day-8-440x440.jpg",
      category: "INTERNATIONAL TIGER DAY",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("ALL");

  // Filter images based on the selected category
  const filteredImages =
    activeCategory === "ALL"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Categories */}
        <div className="flex justify-center space-x-6 border-b pb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-bold uppercase ${
                activeCategory === category
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-600 hover:text-black"
              } px-3 py-2 transition-all`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden">
                <img
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-[250px] object-cover rounded-lg transform group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No images found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
