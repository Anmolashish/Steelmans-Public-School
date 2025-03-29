"use client";
import React, { useContext } from "react";
import Information from "../Data/SchoolData";
import Header from "../Componenets/Header";

export default function MessagesPage1(props) {
  const data = useContext(Information);
  const info = data.messages;

  const message = info.find((e) => e.slug === props.slug);
  console.log(message);

  if (!message) {
    return (
      <>
        <Header heading={"No data found"} />
        <div className="w-full h-[50vh] flex justify-center items-center">
          No data found here
        </div>
      </>
    );
  }

  return (
    <>
      <Header heading={message.heading} />
      <div className="w-full min-h-screen flex justify-center flex-col items-center">
        <div className="main w-[90%] gap-5 p4 max-sm:flex-wrap flex min-h-[70vh] h-fit max-w-[1200px] py-10">
          <div className="w-1/3  h-full mt-10 max-sm:w-full">
            <img src={message.image} alt="" className="w-full rounded-xl" />
            <div className="text-lg font-bold text-center mt-4">
              {message.name}
            </div>
            <div className="text-sm font-light text-center">
              {message.position}
            </div>
          </div>
          <div className="w-2/3  h-full  max-sm:w-full max-sm:text-center">
            {message.message.map((e, i) => {
              return (
                <div
                  key={i}
                  className="text-2xl font-semibold mt-10 max-md:text-lg"
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className="main w-[80%] gap-5 p4 flex min-h-[20vh] h-fit border-t-2 border-b-2 mb-4 max-w-[1200px] py-10">
          <div className="text-3xl text-center font-bold ">{message.quote}</div>
        </div>
      </div>
    </>
  );
}
