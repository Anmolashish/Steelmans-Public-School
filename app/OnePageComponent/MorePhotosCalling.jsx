import React from "react";
import MorePhotosCard from "../Componenets/MorePhotosCard";

export default function MorePhotosCalling() {
  const data = [
    {
      id: 1,
      name: "NASA Trip Photos",
      link: "/more-photos/NASA-trip",
      image: [
        "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1602-440x440.jpg",
        "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1611-440x440.jpg",
      ],
    },
    {
      id: 2,
      name: "Basant Photos",
      link: "/more-photos/basant-photos",
      image: [
        "/Images/IMG-20250410-WA0091.jpg",
        "/Images/IMG-20250410-WA0094.jpg",
      ],
    },
    {
      id: 3,
      name: "Farewell 2024-25",
      link: "/more-photos/farewell-2024-25",
      image: [
        "/Images/IMG-20250411-WA0082.jpg",
        "/Images/IMG-20250411-WA0084.jpg",
      ],
    },
  ];
  return (
    <div className=" py-10">
      <div className="mt-5 flex justify-evenly flex-wrap gap-4">
        {data.map((item) => {
          return (
            <MorePhotosCard
              key={item.id}
              name={item.name}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}
