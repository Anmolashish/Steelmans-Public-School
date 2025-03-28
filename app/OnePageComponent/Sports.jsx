"use client";
import React, { useContext } from "react";
import Information from "../Data/SchoolData";

export default function Sports() {
  const data = useContext(Information);
  const sports = data.sports;
  return (
    <div className="w-full min-h-[40vh] flex justify-center items-center p-5 py-10">
      <div className="w-full max-w-[1200px] ">
        {sports.map((element) => {
          return (
            <div key={element.id} className="data mt-10 mb-5">
              <h2 className="text-2xl text-center font-bold mb-5">
                {element.name}
              </h2>
              <div className="flex gap-10 flex-wrap justify-center">
                {element.images.map((items) => {
                  return (
                    <div key={items.id} className="">
                      <div className=" w-[150px] h-[150px]">
                        <img
                          src={items.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <p className="text-sm text-center">{items.title}</p>
                      </div>
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
