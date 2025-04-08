import Link from "next/link";
import React from "react";

export default function HomePage1() {
  return (
    <>
      <div className=" flex justify-center main-section min-h-[calc(100vh-60px)] w-full  bg-blue-400 relative">
        <div className="absolute min-h-[30vh] w-full max-w-[1200px] bottom-10 flex justify-between flex-wrap max-md:hidden gap-3 items-center ">
          <div className="h-[150px] bg-[rgb(0,0,0,0.6)] flex p-2 gap-2 flex-grow w-[30%] hover:bg-black transition duration-400">
            <div className="w-[40%] flex justify-center items-center h-full">
              <img
                src="https://steelmansschool.com/wp-content/uploads/2015/10/logo-top-1.png"
                alt=""
                className="w-[70px] "
              />
            </div>
            <div className="w-[60%] h-full flex flex-col justify-center gap-2">
              <h1 className="text-white text-[24px] font-bold">
                Photo Gallery
              </h1>
              <Link
                href="/more-photos"
                className="text-[#FFB606] font-bold hover:underline text-sm"
              >
                View more
              </Link>
            </div>
          </div>
          <div className="h-[150px] bg-[rgb(0,0,0,0.6)] flex p-2 gap-2 flex-grow w-[30%] hover:bg-black transition duration-400">
            <div className="w-[40%] flex justify-center items-center h-full">
              <img
                src="https://steelmansschool.com/wp-content/uploads/2015/10/logo-top-2.png"
                alt=""
                className="w-[70px] "
              />
            </div>
            <div className="w-[60%] h-full flex flex-col justify-center gap-2">
              <h1 className="text-white text-[24px] font-bold">
                School Facility
              </h1>
              <Link
                href="/infrastructure"
                className="text-[#FFB606] font-bold hover:underline text-sm"
              >
                View more
              </Link>
            </div>
          </div>
          <div className="h-[150px] bg-[rgb(0,0,0,0.6)] flex p-2 gap-2 flex-grow w-[30%] hover:bg-black transition duration-400">
            <div className="w-[40%] flex justify-center items-center h-full">
              <img
                src="https://steelmansschool.com/wp-content/uploads/2015/10/logo-top-3.png"
                alt=""
                className="w-[70px] "
              />
            </div>
            <div className="w-[60%] h-full flex flex-col justify-center gap-2">
              <h1 className="text-white text-[24px] font-bold">
                Exam Schedules
              </h1>
              <a
                href="/exam-schedule"
                className="text-[#FFB606] font-bold hover:underline text-sm"
              >
                View more
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-60px)]">
          <img
            src="https://steelmansschool.com/wp-content/uploads/2020/11/3.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="hidden max-md:flex min-h-[30vh] w-full gap-5 items-center justify-center flex-wrap py-10">
        <div className="h-[150px] w-[90%] bg-black text-white flex p-2">
          <div className="w-[40%] flex justify-center items-center h-full">
            <img
              src="https://steelmansschool.com/wp-content/uploads/2015/10/logo-top-1.png"
              alt=""
              className="w-[70px] "
            />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center gap-2">
            <h1 className="text-white text-[24px] font-bold">Photo Gallery</h1>
            <a
              href="#"
              className="text-[#FFB606] font-bold hover:underline text-sm"
            >
              View more
            </a>
          </div>
        </div>
        <div className="h-[150px] w-[90%] bg-black transition duration-400 flex p-2">
          {" "}
          <div className="w-[40%] flex justify-center items-center h-full">
            <img
              src="https://steelmansschool.com/wp-content/uploads/2015/10/logo-top-2.png"
              alt=""
              className="w-[70px] "
            />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center gap-2">
            <h1 className="text-white text-[24px] font-bold">
              School Facility
            </h1>
            <a
              href="#"
              className="text-[#FFB606] font-bold hover:underline text-sm"
            >
              View more
            </a>
          </div>
        </div>
        <div className="h-[150px] w-[90%] bg-black transition duration-400 flex p-2">
          <div className="w-[40%] flex justify-center items-center h-full">
            <img
              src="https://steelmansschool.com/wp-content/uploads/2015/10/logo-top-3.png"
              alt=""
              className="w-[70px] "
            />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center gap-2">
            <h1 className="text-white text-[24px] font-bold">Exam Schedules</h1>
            <a
              href="#"
              className="text-[#FFB606] font-bold hover:underline text-sm"
            >
              View more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
