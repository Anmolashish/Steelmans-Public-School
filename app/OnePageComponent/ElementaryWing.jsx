 "use client";
import React, { useContext, useState } from "react";
import Information from "../Data/SchoolData";

export default function ElementaryWing() {
  const data = useContext(Information);
  const eInfo = data.elementaryWing;

  const [expanded, setExpanded] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  // Toggle expand for "View More" / "View Less"
  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full min-h-[40vh] flex justify-center items-center p-6 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] flex flex-col gap-10">
          {eInfo.map((element) => {
            const isExpanded = expanded[element.id] || false;
            const visibleImages = isExpanded
              ? element.images
              : element.images.slice(0, 5);

            return (
              <div
                key={element.id}
                className="w-full flex flex-col gap-4 p-5 border border-gray-200 rounded-xl shadow-sm bg-white transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800">{element.heading}</h2>

                <div className="flex flex-wrap gap-4">
                  {visibleImages.map((image, i) => (
                    <div
                      key={i}
                      className="w-[200px] h-[200px] overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Image ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* View More / View Less Button */}
                {element.images.length > 5 && (
                  <div className="w-full flex justify-center mt-4">
                    <button
                      onClick={() => {
                        toggleExpand(element.id);

                        // Smooth scroll to the top after "View More" is clicked
                        if (isExpanded) {
                          scrollToTop(); // Scroll to top when "View Less" is clicked
                        }
                      }}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full shadow transition-all duration-300"
                    >
                      {isExpanded ? "View Less" : "View More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Image Modal with Animation & Close Button */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div
            className="relative animate-fadeInScale max-w-[90%] max-h-[90%] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80 transition"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full Preview"
              className="w-full h-auto max-h-[85vh] rounded-lg shadow-2xl object-contain transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </>
  );
}
