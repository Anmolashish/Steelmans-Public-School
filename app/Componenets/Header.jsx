import React from "react";

export default function Header(props) {
  return (
    <div className="w-full h-[50vh] bg-[url(https://steelmansschool.com/wp-content/uploads/2019/11/bg-page-2.jpg)] bg-center">
      <div className="bg-[#00000053] w-full h-full flex justify-center items-center">
        <div className="w-[90%] max-w-[1200px] ">
          <h1 className="text-[#F7F7F7] relative text-6xl font-bold after:content[''] after:absolute after:h-full after:w-1 after:bg-amber-300 after:left-0 pl-5">
            {props.heading}
          </h1>
        </div>
      </div>
    </div>
  );
}
