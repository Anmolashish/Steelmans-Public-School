import React from "react";
import ActivitiesCard from "../Componenets/ActivitiesCard";

export default function HomePage2() {
  const data = [
    {
      id: 1,
      name: "Elementry Wing",
      link: "/activities/elementry-wing",
      image: [
        "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0070-1-300x300.jpg",
        "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210430-WA0073-300x300.jpg",
      ],
    },
    {
      id: 2,
      name: "Primary Wing",
      link: "/activities/primary-wing",
      image: [
        "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0065-300x300.jpg",
        "https://steelmansschool.com/wp-content/uploads/2019/11/IMG-20210407-WA0072-300x300.jpg",
      ],
    },
    {
      id: 3,
      name: "Clubs",
      link: "/activities/clubs",
      image: [
        "https://steelmansschool.com/wp-content/uploads/2020/12/christmas5.jpg",
        "https://steelmansschool.com/wp-content/uploads/2020/12/christmas2.jpg",
      ],
    },
  ];
  return (
    <div className="home-page-2 min-h-[35vh] h-fit flex justify-center items-center pb-10">
      <div className="max-w-[1200px] w-[90%] min-h-[30vh] my-10">
        <div className="heading text-3xl font-semibold flex flex-col  after:content-[''] after:block after:w-[10%] after:h-[1px] after:rounded-full after:mt-5 after:bg-black after:transition-all after:duration-300 hover:after:w-[30%] justify-center items-center text-center">
          ACTIVITIES
          <small className="text-gray-500 text-sm font-light mt-1 ">
            Engage with the Newest activites happening in Steelmans public
            school
          </small>
        </div>
        <div className="mt-5 flex justify-evenly flex-wrap gap-4">
          {data.map((item) => {
            return (
              <ActivitiesCard
                key={item.id}
                name={item.name}
                image={item.image}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
