import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
  const data = [
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1602-440x440.jpg",
      alt: "Group photo of students during NASA visit",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1611-440x440.jpg",
      alt: "Students interacting with NASA exhibits",
    },
    {
      src: "https://steelmansschool.com/wp-content/uploads/2018/11/IMG_1604-440x440.jpg",
      alt: "Students learning about space technology",
    },
  ];
  return (
    <>
      <Header heading={"NASA Trip"} />
      <MorePhotos
        data={data}
        heading="NASA Trip Gallery"
        description="Explore our students' memorable journey to NASA"
      />
    </>
  );
}
