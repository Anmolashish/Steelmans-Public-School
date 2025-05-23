 import Header from "@/app/Componenets/Header";
import React from "react";

export default function page() {
  const data = [
    {
      id: 1,
      images: [
        {
          id: 4,
          image: "/result 2024-25.jpg",
        },
      ],
    },
  ];

  return (
    <>
      <Header heading={"Session 2024-25"} />
      {data.map((element) => {
        return (
          <div
            key={element.id}
            className="w-full min-h-[50vh] flex justify-center items-center p-10"
          >
            <div className="w-full max-w-[1200px] flex flex-col items-center">
              <div className="sub-heading text-md text-gray-500">
                {element.subHeading}
              </div>
              <div className="heading text-4xl font-bold mb-5">
                {element.heading}
              </div>

              {/* Full-Size Image Display */}
              {element.images.map((image) => {
                return (
                  <div
                    key={image.id}
                    className="image-card w-full max-w-[800px] flex flex-col justify-center items-center p-3"
                  >
                    <div className="w-full h-[500px] bg-amber-200">
                      <img
                        src={image.image}
                        alt=""
                        className="w-full h-full object-contain rounded-md shadow-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
