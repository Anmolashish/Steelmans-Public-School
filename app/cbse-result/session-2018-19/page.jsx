import Header from "@/app/Componenets/Header";
import React from "react";

export default function page() {
  const data = [
    {
      id: 1,
      subHeading:
        "The Extraordinary Achievement of Steelmanians In The Xth Board Examination.",
      heading: " X Board Results 2018-19",
      images: [
        {
          id: 1,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/1_LovepreetKaur87.2.jpg",
          heading: "Lovepreet Kaur",
          marks: "87.2%",
        },
        {
          id: 2,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/2_GurmehakGill85.4.jpg",
          heading: "Gurmehak Gill",
          marks: "85.4%",
        },
        {
          id: 3,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/3_KhushdeepKaur83.2.jpg",
          heading: "Khushdeep Kaur",
          marks: "83.2%",
        },

        {
          id: 4,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/4_GursimranSinghBadesha82.jpg",
          heading: "Gursimran Singh Badesha",
          marks: "82%",
        },
        {
          id: 5,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/5_NavjotKaur82.jpg",
          heading: "Navjot Kaur",
          marks: "82%",
        },
        {
          id: 6,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/6_DevInderSharma81.6.jpg",
          heading: "Dev Inder Sharma",
          marks: "81.6%",
        },
      ],
    },
    {
      id: 2,
      subHeading: "They Brought Us Laurels",
      heading: "XII Board Results 2018-19",
      images: [
        {
          id: 1,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/1_Arshdeep-Singh-Commerce-Stream90.2.jpg",
          heading: "Arshdeep Singh (Commerce Stream)",
          marks: "90.2%",
        },
        {
          id: 2,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/2_Amandeep-Kaur-Science-Stream86.6.jpg",
          heading: "Amandeep Kaur (Science Stream)",
          marks: "86.6%",
        },
        {
          id: 3,
          image:
            "https://steelmansschool.com/wp-content/uploads/2019/11/3_Harkamanpreet-Singh-Arts-Stream83.2.jpg",
          heading: "Harkamanpreet Singh (Arts)",
          marks: "83.2%",
        },
      ],
    },
  ];
  return (
    <>
      <Header heading={"Session 2018-19"} />
      {data.map((element) => {
        return (
          <div
            key={element.id}
            className="w-full min-h-[50vh] flex justify-center items-center p-10"
          >
            <div className="w-full max-w-[1200px]">
              <div className="sub-heading text-md text-gray-500">
                {element.subHeading}
              </div>
              <div className="heading text-4xl font-bold">
                {element.heading}
              </div>
              <div className="images mt-10 flex flex-wrap gap-4 ">
                {element.images.map((image) => {
                  return (
                    <div
                      key={image.id}
                      className="image-card w-[200px] flex flex-col justify-center items-center p-3 flex-grow"
                    >
                      <div className="w-[150px] h-[150px] bg-amber-200">
                        <img
                          src={image.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-sm">{image.heading}</div>
                        <div className="text-sm">{image.marks}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
