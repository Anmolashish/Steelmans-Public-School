 
import React from "react";
import Header from "../Componenets/Header";

export default function page() {
  const data = [
    {
      id: 1,
      eventName: "Baishaki Celebration On 12 April",
      eventImage:
        "https://steelmansschool.com/wp-content/uploads/2024/04/1000376105_20240415_123409486.jpg",
    },
    {
      id: 2,
      eventName: "Foundation day Celebration",
      eventImage:
        "https://steelmansschool.com/wp-content/uploads/2024/07/FOUNDATION-DAY-CELEBRATION-1-scaled.jpeg",
    },
    {
      id: 3,
      eventName: "Baisakhi Celebration (2025-26)",
      eventImage:
        "/Images/WhatsApp Image 2025-04-13 at 13.05.26_ae1f68bf.jpg",
    },
    {
      id: 4,
      eventName: "Turban tying Competition on the occasion of Baisakhi",
      eventImage:
        "/Images/WhatsApp Image 2025-04-15 at 10.52.50_fa24ef43.jpg",
    },
    // You can add more (up to 12) if needed
  ];

  return (
    <>
      <Header heading={"News & Events"} />
      <div className="w-full min-h-[40vh] p-5 flex justify-center items-center py-10">
        <div className="w-full max-w-[1200px] flex flex-col gap-16">
          {/* Render all events except ID 3 and 4 normally */}
          <div className="flex flex-wrap justify-evenly gap-10">
            {data
              .filter((item) => item.id !== 3 && item.id !== 4)
              .map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-4 w-full max-w-[500px]">
                  <div className="text-2xl font-bold text-center">
                    {item.eventName}
                  </div>
                  <img
                    src={item.eventImage}
                    alt="Event"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              ))}
          </div>

          {/* Render images with ID 3 and 4 side by side in grid */}
          <div>
            <div className="text-3xl font-bold mb-12 text-center">
              Baisakhi Special Moments
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data
                .filter((item) => item.id === 3 || item.id === 4)
                .map((item) => (
                  <div key={item.id} className="flex flex-col items-center gap-4">
                    <div className="text-xl font-semibold text-center">
                      {item.eventName}
                    </div>
                    <img
                      src={item.eventImage}
                      alt="Event"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}