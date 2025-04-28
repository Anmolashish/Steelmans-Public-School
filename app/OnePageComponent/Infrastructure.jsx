  "use client";
import { useContext } from "react";
import Information from "../Data/SchoolData";

export default function SchoolCalendarWithInfrastructure() {
  const data = useContext(Information);
  const infra = data.infrastructure;

  return (
    <>
      {/* PDF Section */}
      <div className="w-full h-screen flex justify-center items-center p-5">
        <div className="w-full max-w-[1200px] h-[600px]">
          <h1 className="text-3xl font-bold text-center mb-5">
            School Calender (2025–2026)
          </h1>
          <div className="w-full h-full">
            <iframe
              src="https://publuu.com/flip-book/860750/1886425"
              width="100%"
              height="100%"
              className="border-none"
              title="School Calendar PDF"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Infrastructure Section */}
      <div className="w-full min-h-[40vh] flex justify-center items-center p-5 py-10">
        <div className="w-full max-w-[1200px] ">
          {infra.map((element) => {
            return (
              <div key={element.id} className="data mt-10 mb-5">
                <h2 className="text-2xl text-center font-bold mb-5">
                  {element.name}
                </h2>
                <div className="flex gap-10 flex-wrap justify-center">
                  {element.images.map((items) => {
                    return (
                      <div key={items.id}>
                        <div className="w-[150px] h-[150px]">
                          <img
                            src={items.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-center">{items.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
