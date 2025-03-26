import React from "react";

export default function HomePage3() {
  return (
    <>
      <div className="w-full h-[80vh] min-h-[80vh] bg-[url(https://steelmansschool.com/wp-content/uploads/2015/10/bg_register_now.jpg)]">
        <div className="h-full w-full bg-[rgb(0,0,0,0.1)] flex max-md:flex-col justify-center items-center">
          <div className="text-side w-[50%] h-full  flex flex-col justify-center items-center">
            <div className="">
              <div className="text-white text-2xl">
                Shape your future with{" "}
                <span className="text-[#ffb606] font-bold">
                  Steelmans public school
                </span>
              </div>
              <div className="text-white text-7xl font-black font-sans">
                Register Now
              </div>
              <div className="flex justify-between items-center gap-2 mt-4">
                <div className="rounds rounded-full border-2 border-white h-[100px] w-[100px] text-white flex flex-col justify-center items-center">
                  <div className="timer text-4xl font-bold">00</div>
                  <div className="undertimer">Days</div>
                </div>
                <div className="rounds rounded-full border-2 border-white h-[100px] w-[100px] text-white flex flex-col justify-center items-center">
                  <div className="timer text-4xl font-bold">00</div>
                  <div className="undertimer">Hours</div>
                </div>
                <div className="rounds rounded-full border-2 border-white h-[100px] w-[100px] text-white flex flex-col justify-center items-center">
                  <div className="timer text-4xl font-bold">00</div>
                  <div className="undertimer">Minutes</div>
                </div>
                <div className="rounds rounded-full border-2 border-white h-[100px] w-[100px] text-white flex flex-col justify-center items-center">
                  <div className="timer text-4xl font-bold">00</div>
                  <div className="undertimer">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-side max-md:hidden w-[50%] h-full flex justify-center items-center">
            <div className="form relative h-[80%] w-[400px] flex justify-center items-center overflow-hidden bg-white">
              <div className="floating-circle absolute w-[600px] rounded-full h-screen bg-[#ffb606] bottom-[60%]"></div>
              <div className="absolute top-5 text-white font-bold text-2xl w-[90%] text-center">
                {" "}
                Register at Steelmans Public School and shape your future with
                us!
              </div>
              <form className="absolute bottom-5 flex flex-col justify-center w-full items-center gap-3">
                <input
                  type="text"
                  className="w-[80%] border-gray-200 border-1 p-2"
                  placeholder="Your Name*"
                />{" "}
                <input
                  type="text"
                  className="w-[80%] border-gray-200 border-1 p-2"
                  placeholder="Email*"
                />{" "}
                <input
                  type="text"
                  className="w-[80%] border-gray-200 border-1 p-2"
                  placeholder="Phone*"
                />
                <button className="mt-4 bg-black text-white p-2 w-[80%]">
                  Get it now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:flex hidden h-[80vh] w-full justify-center items-center">
        {" "}
        <div className="form-side hidden w-[50%] h-full max-md:flex justify-center items-center">
          <div className="form relative h-[80%] shadow-xl min-w-[400px] flex justify-center items-center overflow-hidden bg-white">
            <div className="floating-circle absolute w-[600px] rounded-full h-screen bg-[#ffb606] bottom-[60%]"></div>
            <div className="absolute top-5 text-white font-bold text-2xl w-[90%] text-center">
              {" "}
              Register at Steelmans Public School and shape your future with us!
            </div>
            <form className="absolute bottom-5 flex flex-col justify-center w-full items-center gap-3">
              <input
                type="text"
                className="w-[80%] border-gray-200 border-1 p-2"
                placeholder="Your Name*"
              />{" "}
              <input
                type="text"
                className="w-[80%] border-gray-200 border-1 p-2"
                placeholder="Email*"
              />{" "}
              <input
                type="text"
                className="w-[80%] border-gray-200 border-1 p-2"
                placeholder="Phone*"
              />
              <button className="mt-4 bg-black text-white p-2 w-[80%]">
                Get it now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
