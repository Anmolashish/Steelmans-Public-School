"use client";
import React, { useContext } from "react";
import Information from "../Data/SchoolData";

export default function ElementaryWing() {
  const data = useContext(Information);
  const eInfo = data.elementaryWing;
  return (
    <div className="w-full min-h-[40vh] flex justify-center items-center p-10">
      <div className="w-[90%] max-w-[1200px] h-full flex flex-col">
        {eInfo.map((element) => {
          return (
            <div key={element.id} className="w-full flex flex-col gap-5 p-5">
              <h2 className="text-3xl font-bold">{element.heading}</h2>
              <div className=" flex flex-wrap gap-2">
                {element.images.map((image, i) => {
                  return (
                    <div key={i} className="">
                      <img
                        src={image}
                        alt=""
                        className="w-[150px] h-[150px] object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
