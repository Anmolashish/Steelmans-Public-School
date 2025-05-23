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
      name: "Farewell (2024-25)",
      link: "/more-photos/farewell-2024-25",
      image: [
        "/Images/IMG-20250411-WA0082.jpg",
        "/Images/IMG-20250411-WA0084.jpg",
      ],

      
    },

    {
      id: 4,
      name: "Baisakhi Celebrations   (12th April 2025)",
      link: "/more-photos/baisakhi-2025-26",
      image: [
        "/BAISAKHI/IMG-20250417-WA0052.jpg",
        "/BAISAKHI/IMG-20250417-WA0153.jpg",
      ],

      
    },

    {
      id: 5,
      name: "Foundation Day Celebration (2025-26)",
      link: "/more-photos/foundation-day-2025-26",
      image: [
        "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 15.11.31_5d92ca4f.jpg",
        "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 15.14.44_a41e3e2f.jpg",
      ],
      
      
    },
    
      {
        id: 6,
        name: "CLASS ROOM COMPETITION (2025-2026)",
        link: "/more-photos/class-room-competition",
        image: [
          "/CLASS ROOM COMPETITION/IMG-20250426-WA0061.jpg",
          "/CLASS ROOM COMPETITION/IMG-20250426-WA0062.jpg",
         
        ]
      },
      {
  
  id: 9,
  name: "ORIENTATION P T M (2025-2026)",
  link: "/more-photos/ORIENTATION-PTM",
  image: [
    "/ORIENTATION-PTM/IMG-20250428-WA0031.jpg",
    "/ORIENTATION-PTM/IMG-20250428-WA0032.jpg",
   
  ]
}  ,
 {
  
  id: 7,
  name: "World Earth Day (22nd April 2025)",
  link: "/more-photos/earth-day-celebrations",
  image: [
    "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0075.jpg",
    "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0076.jpg",
   
  ]
},{
  
  id: 8,
  name: " Investiture Ceremony on 3rd May",
  link: "/more-photos/INVESTITURE-CEREMONY",
  image: [
    "/INVESTITURE CEREMONY/1.jpeg",
      "/INVESTITURE CEREMONY/2.jpeg",
 ,
   
  ]
}
      
      
      
      
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
