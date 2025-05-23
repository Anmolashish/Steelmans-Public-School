 "use client";
import React, { useContext, useRef, useState } from "react";
import Information from "../Data/SchoolData";

export default function PrimaryWing() {
  const data = useContext(Information);
  const pInfo = data.primaryWing;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [expandedFolders, setExpandedFolders] = useState({});
  const folderRefs = useRef({});

  const openModal = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  const toggleFolder = (id) => {
    setExpandedFolders((prev) => {
      const isExpanding = !prev[id];

      if (!isExpanding && folderRefs.current[id]) {
        folderRefs.current[id].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return {
        ...prev,
        [id]: isExpanding,
      };
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10 flex justify-center">
      <div className="w-full max-w-7xl space-y-12">
        {pInfo.map((folder) => {
          const isExpanded = expandedFolders[folder.id];
          const imagesToShow = isExpanded
            ? folder.images
            : folder.images.slice(0, 5); // Show 5 by default

          return (
            <div
              key={folder.id}
              ref={(el) => (folderRefs.current[folder.id] = el)}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {folder.heading}
              </h2>

              <div
                className={`grid gap-6 ${
                  imagesToShow.length <= 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                }`}
              >
                {imagesToShow.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Image ${index + 1}`}
                    onClick={() => openModal(img)}
                    className="w-full h-60 object-cover rounded-lg cursor-pointer shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-300"
                  />
                ))}
              </div>

              {folder.images.length > 5 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => toggleFolder(folder.id)}
                    className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Image Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative bg-white rounded-xl p-4 shadow-xl max-w-4xl w-full mx-4">
            <img
              src={currentImage}
              alt="Enlarged"
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full text-3xl w-10 h-10 flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
