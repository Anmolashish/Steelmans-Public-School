import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
  const data = [
    {
      src: "/Images/IMG-20250410-WA0091.jpg",
      alt: "Group photo of students during NASA visit",
    },
    {
      src: "/Images/IMG-20250410-WA0092.jpg",
      alt: "Students interacting with NASA exhibits",
    },
    {
      src: "/Images/IMG-20250410-WA0093.jpg",
      alt: "Students interacting with NASA exhibits",
    },
    {
      src: "/Images/IMG-20250410-WA0094.jpg",
      alt: "Students learning about space technology",
    },
    {
      src: "/Images/WhatsApp Image 2025-04-10 at 12.23.28_8aefab26.jpg",
      alt: "Students learning about space technology",
    },
    {
      src: "/Images/WhatsApp Image 2025-04-10 at 12.23.28_7930931f.jpg",
      alt: "Students learning about space technology",
    },
    {
      src: "/Images/WhatsApp Image 2025-04-10 at 12.23.28_b53c17e1.jpg",
      alt: "Students learning about space technology",
    },
    {
      src: "/Images/WhatsApp Image 2025-04-10 at 12.23.29_47dfbafc.jpg",
      alt: "Students learning about space technology",
    },
    {
      src: "/Images/WhatsApp Image 2025-04-10 at 12.23.30_71f57324.jpg",
      alt: "Students learning about space technology",
    },
    {
      src: "/Images/WhatsApp Image 2025-04-10 at 12.23.30_297ed312.jpg",
      alt: "Students learning about space technology",
    },
  ];
  return (
    <div>
      <Header heading={"Basant Photos"} />
      <MorePhotos
        data={data}
        heading="Basant Gallery"
        description="Explore our students' memorable Moments at Basant"
      />
    </div>
  );
}
