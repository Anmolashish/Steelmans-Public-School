import React from "react";
import NewsCard from "../Componenets/NewsCard";

export default function HomePage4() {
  const data = [
    {
      id: 1,
      image:
        "https://steelmansschool.com/wp-content/uploads/2024/07/FOUNDATION-DAY-CELEBRATION-1-scaled.jpeg",
    },
    {
      id: 2,
      image:
        "https://steelmansschool.com/wp-content/uploads/2024/04/1000376105_20240415_123409486.jpg",
    },
  ];
  return (
    <div className="home-page-2 min-h-[30vh] flex justify-center items-center pb-10">
      <div className="max-w-[1200px] w-[90%] min-h-[25vh] mt-10">
        <div className="heading text-3xl font-semibold flex flex-col  after:content-[''] after:block after:w-[10%] after:h-[1px] after:rounded-full after:mt-5 after:bg-black after:transition-all after:duration-300 hover:after:w-[30%] justify-center items-center text-center">
          NEWS & EVENTS
          <small className="text-gray-500 text-sm font-light mt-1 ">
            Upcoming News & Events to feed your brain.
          </small>
        </div>
        <div className=" flex justify-evenly items-center mt-10 flex-wrap gap-4 ">
          {data.map((item) => {
            return <NewsCard key={item.id} image={item.image} />;
          })}
          <div className="bg-white rounded-3xl p-2 w-[300px] h-[350px] border-1 flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center ">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/connection-status-off.png"
                alt="connection-status-off"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg font-bold text-black">View more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
