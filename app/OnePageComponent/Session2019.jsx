import React from "react";

export default function Session2019() {
  const data = [
    {
      id: 1,
      image:
        "https://steelmansschool.com/wp-content/uploads/2019/11/2019-20.jpeg",
    },
  ];
  return (
    <div className="w-full min-h-screen flex justify-center items-center pb-20">
      <div className="flex flex-col items-center max-w-[1200px] justify-center w-full p-10 gap-10">
        {data.map((e) => {
          return (
            <div
              key={e.id}
              className="images h-[400px] max-md:h-[300px] max-w-[600px] w-[90%] flex justify-center items-center"
            >
              <img src={e.image} alt="" className="w-full " />
            </div>
          );
        })}
      </div>
    </div>
  );
}
