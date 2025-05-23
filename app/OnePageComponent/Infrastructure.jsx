 "use client";
import { useContext, useState } from "react";
import Information from "../Data/SchoolData";

export default function SchoolCalendarWithInfrastructure() {
  const data = useContext(Information);
  const infra = data.infrastructure;

  const [activeSection, setActiveSection] = useState(infra[0]?.id || null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  // Handle click to view full image
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  // Toggle view more/less images in a section
  const toggleSectionExpand = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Function to navigate between images in the modal
  const handleNextImage = () => {
    const currentIndex = infra
      .flatMap((section) => section.images)
      .findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % infra.flatMap((section) => section.images).length;
    setSelectedImage(infra.flatMap((section) => section.images)[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = infra
      .flatMap((section) => section.images)
      .findIndex((img) => img.id === selectedImage.id);
    const prevIndex =
      (currentIndex - 1 + infra.flatMap((section) => section.images).length) %
      infra.flatMap((section) => section.images).length;
    setSelectedImage(infra.flatMap((section) => section.images)[prevIndex]);
  };

  return (
    <>
   

      {/* Infrastructure Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Our School Infrastructure
          </h2>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {infra.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 font-medium text-lg ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md transform -translate-y-1"
                    : "bg-white text-blue-600 border-blue-400 hover:bg-blue-50 hover:border-blue-600"
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Active Section Content */}
          {infra
            .filter((section) => section.id === activeSection)
            .map((section) => (
              <div key={section.id} className="w-full">
                <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                  {section.name} Facilities
                </h3>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                  {section.description ||
                    "Explore our state-of-the-art facilities designed to enhance learning and development."}
                </p>

                {/* Grid Layout for Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.images.slice(0, expandedSections[section.id] ? section.images.length : 3).map((img) => (
                    <div
                      key={img.id}
                      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => handleImageClick(img)}
                    >
                      <img
                        src={img.image}
                        alt={img.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-lg font-medium">{img.title}</p>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-gray-800 font-medium">{img.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Toggle View More / View Less */}
                {section.images.length > 3 && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => toggleSectionExpand(section.id)}
                      className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
                    >
                      {expandedSections[section.id] ? "View Less" : "View More"}
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Full-Size Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 w-full h-full bg-black/90 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full max-h-[90vh] relative">
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image and Navigation */}
            <div className="flex justify-between items-center w-full h-full">
              <button
                onClick={handlePrevImage}
                className="text-white text-3xl p-4 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-200"
              >
                &#8592;
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              <button
                onClick={handleNextImage}
                className="text-white text-3xl p-4 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-200"
              >
                &#8594;
              </button>
            </div>

            {/* Image Details */}
            <div className="bg-white p-4 rounded-b-lg">
              <p className="text-gray-900 text-xl font-semibold text-center">
                {selectedImage.title}
              </p>
              {selectedImage.description && (
                <p className="text-gray-600 text-center mt-2">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
