import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react"; // using lucide icons, install via `npm install lucide-react`

export default function ActivitiesCard(props) {
  return (
    <Link href={props.link} passHref>
      <div
        className="card w-[300px] h-[350px] bg-white duration-300 ease-in-out transition-all hover:scale-105 hover:shadow-2xl active:scale-95 
                   rounded-3xl p-3 border border-gray-300 cursor-pointer group"
      >
        <div className="card-image w-full h-[50%] bg-amber-50 rounded-2xl flex overflow-hidden">
          <img
            src={props.image[0]}
            alt={props.name}
            className="object-cover w-[50%] h-full"
          />
          <img
            src={props.image[1]}
            alt={props.name}
            className="object-cover w-[50%] h-full"
          />
        </div>

        <div className="card-content h-[50%] p-5 flex flex-col justify-evenly items-center text-center">
          <h2 className="text-2xl font-bold">{props.name}</h2>
          <div
            className="text-md mt-2 rounded-full w-[80%] font-bold bg-amber-400 text-white
              p-2 flex items-center justify-center gap-2 transition-transform group-hover:translate-x-1"
          >
            View More <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}
