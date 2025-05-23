 "use client";
import React, { useContext, useState } from "react";
import Information from "../Data/SchoolData";

export default function Sports() {
  const data = useContext(Information);
  const sports = data.sports;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-[1200px] mx-auto">
        {sports.map((element) => (
          <div key={element.id} className="mb-16">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
              {element.name}
            </h2>

            {/* Centered images grid with larger sizes */}
            <div className="flex justify-center gap-8 flex-wrap">
              {element.images.map((item) => (
                <div
                  key={item.id}
                  onClick={() => item.image && setSelectedImage(item)} // Only allow click if image exists
                  className={`cursor-pointer transition-transform duration-300 transform ${
                    item.image ? "hover:scale-110" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div className="w-96 h-96 overflow-hidden rounded-xl shadow-lg mx-auto bg-gray-100 flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title || "Sports Image"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-500 text-center px-4">
                        No Image Available
                      </span>
                    )}
                  </div>
                  <p className="text-center text-sm mt-2 font-medium text-gray-700">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal for Viewing with larger image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center opacity-100 scale-100 transition-all duration-700 ease-out"
          onClick={() => setSelectedImage(null)} // Close the modal when clicking on the overlay
        >
          <div
            className="max-w-[90%] max-h-[90%] relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside the image
          >
            {/* Image in the modal */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-screen object-contain rounded-md"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.title}
            </p>
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)} // Close the modal on close button click
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
