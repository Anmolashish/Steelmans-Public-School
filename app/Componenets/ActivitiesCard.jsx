import Link from "next/link";
import React from "react";

export default function ActivitiesCard(props) {
  return (
    <div>
      <div className="card w-[300px] h-[350px] bg-white duration-300 transition hover:shadow-2xl rounded-3xl p-3 border-1 border-gray-300">
        <div className="card-image w-full h-[50%] bg-amber-50 rounded-2xl flex overflow-hidden">
          <img
            src={props.image[0]}
            alt={props.name}
            className=" object-cover w-[50%]"
          />{" "}
          <img
            src={props.image[1]}
            alt={props.name}
            className=" object-cover w-[50%]"
          />{" "}
        </div>
        <div className="card-content h-[50%] p-5 flex  flex-col justify-evenly items-center text-center ">
          <h2 className="text-2xl font-bold">{props.name}</h2>
          <Link
            href={props.link}
            className="text-md rounded-2xl w-[80%] font-bold bg-amber-400 text-white
            p-2"
          >
            View More {"  ->"}
          </Link>
        </div>
      </div>
    </div>
  );
}
