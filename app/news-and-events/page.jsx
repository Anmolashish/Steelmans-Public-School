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
  ];
  return (
    <>
      <Header heading={"News & Events"} />
      <div className="w-full min-h-[40vh] p-5 flex justify-center items-center py-10">
        <div className="w-full max-w-[1200px] flex justify-evenly items-center flex-wrap gap-10">
          {data.map((items) => {
            return (
              <div key={items.id} className="flex flex-col gap-4 ">
                <div className="text-3xl font-bold mb-10 max-sm:mb-5">
                  {items.eventName}
                </div>
                <img
                  src={items.eventImage}
                  alt="Event Image"
                  className="w-full max-w-[500px] border-1"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
