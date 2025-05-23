 "use client";
import React, { useContext } from "react";
import Information from "../Data/SchoolData";
import Header from "../Componenets/Header";

export default function MessagesPage1(props) {
  const data = useContext(Information);
  const info = data.messages;
  const message = info.find((e) => e.slug === props.slug);

  if (!message) {
    return (
      <>
        <Header heading="No data found" />
        <div className="w-full h-[50vh] flex justify-center items-center text-xl font-semibold">
          No data found here
        </div>
      </>
    );
  }

  return (
    <>
      <Header heading={message.heading} />

      <div className="w-full min-h-screen flex flex-col items-center py-10">
        {/* Main Section */}
        <div className="main w-[90%] max-w-[1200px] flex gap-10 max-sm:flex-col py-10">
          {/* Image & Info */}
          <div className="w-1/3 max-sm:w-full mt-5 flex flex-col items-center">
            <img src={message.image} alt="" className="w-full rounded-xl" />
            <div className="text-lg sm:text-xl font-bold text-center mt-6">
              {message.name}
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mt-2">
  {message.position}
</div>

          </div>

          {/* Message Text */}
          <div className="w-2/3 max-sm:w-full">
            {message.message.map((e, i) => (
              <p
                key={i}
                className="text-base sm:text-lg md:text-xl leading-relaxed mt-6"
              >
                {e}
              </p>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="w-[80%] max-w-[1000px] border-t-2 border-b-2 py-8 mt-6 text-center">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 italic">
            “{message.quote}”
          </div>
        </div>
      </div>
    </>
  );
}
//  heading must be biger 