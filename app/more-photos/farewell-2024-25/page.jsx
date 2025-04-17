import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
  const data = [
    {
      src: "/Images/IMG-20250411-WA0082.jpg",
      alt: "Farewell 2024-25 - Group photo of graduating students",
    },
    {
      src: "/Images/IMG-20250411-WA0084.jpg",
      alt: "Farewell 2024-25 - Students enjoying the event",
    },
    {
      src: "/Images/IMG-20250411-WA0085.jpg",
      alt: "Farewell 2024-25 - Student receiving award",
    },
    {
      src: "/Images/IMG-20250411-WA0086.jpg",
      alt: "Farewell 2024-25 - Emotional moment between friends",
    },
    {
      src: "/Images/IMG-20250411-WA0088.jpg",
      alt: "Farewell 2024-25 - Cultural performance on stage",
    },
    {
      src: "/Images/IMG-20250411-WA0098.jpg",
      alt: "Farewell 2024-25 - Faculty addressing graduating batch",
    },
    {
      src: "/Images/IMG-20250411-WA0099.jpg",
      alt: "Farewell 2024-25 - Students posing together",
    },
    {
      src: "/Images/IMG-20250411-WA0100.jpg",
      alt: "Farewell 2024-25 - Cake cutting ceremony",
    },
    {
      src: "/Images/IMG-20250411-WA0101.jpg",
      alt: "Farewell 2024-25 - Student giving farewell speech",
    },
    {
      src: "/Images/IMG-20250411-WA0103.jpg",
      alt: "Farewell 2024-25 - Group photo with faculty",
    },
    {
      src: "/Images/IMG-20250411-WA0105.jpg",
      alt: "Farewell 2024-25 - Students dancing together",
    },
    {
      src: "/Images/IMG-20250411-WA0106.jpg",
      alt: "Farewell 2024-25 - Best friends posing for photo",
    },
    {
      src: "/Images/IMG-20250411-WA0107.jpg",
      alt: "Farewell 2024-25 - Student receiving graduation certificate",
    },
    {
      src: "/Images/IMG-20250411-WA0108.jpg",
      alt: "Farewell 2024-25 - Classmates sharing memories",
    },
    {
      src: "/Images/IMG-20250411-WA0110.jpg",
      alt: "Farewell 2024-25 - Students decorating venue",
    },
    {
      src: "/Images/IMG-20250411-WA0112.jpg",
      alt: "Farewell 2024-25 - Group photo with college banner",
    },
    {
      src: "/Images/IMG-20250411-WA0113.jpg",
      alt: "Farewell 2024-25 - Students enjoying food",
    },
    {
      src: "/Images/IMG-20250411-WA0114.jpg",
      alt: "Farewell 2024-25 - Emotional farewell hugs",
    },
    {
      src: "/Images/IMG-20250411-WA0115.jpg",
      alt: "Farewell 2024-25 - Students with farewell props",
    },
    {
      src: "/Images/IMG-20250411-WA0118.jpg",
      alt: "Farewell 2024-25 - Faculty blessing students",
    },
    {
      src: "/Images/IMG-20250411-WA0119.jpg",
      alt: "Farewell 2024-25 - Students signing yearbook",
    },
    {
      src: "/Images/IMG-20250411-WA0122.jpg",
      alt: "Farewell 2024-25 - Cultural dance performance",
    },
    {
      src: "/Images/IMG-20250411-WA0123.jpg",
      alt: "Farewell 2024-25 - Student receiving memento",
    },
    {
      src: "/Images/IMG-20250411-WA0125.jpg",
      alt: "Farewell 2024-25 - Final group photo of the batch",
    },
  ];
  return (
    <>
      <Header heading={"Farewell 2024-25"} />
      <MorePhotos
        data={data}
        heading="Farewell 2024-25"
        description="Explore our students' Farewell gallary"
      />
    </>
  );
}
