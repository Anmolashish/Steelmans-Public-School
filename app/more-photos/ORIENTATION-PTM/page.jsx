import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
  const data = [
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0031.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0032.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0033.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0034.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0035.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0036.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0037.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0038.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0039.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0040.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0041.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0042.jpg", alt: "ORIENTATION P T M" },
    { src: "/ORIENTATION-PTM/IMG-20250428-WA0043.jpg", alt: "ORIENTATION P T M" }
  ];
  
  return (
    <div>
      <Header heading={"ORIENTATION-PTM "} />
      <MorePhotos
        data={data}
        heading="ORIENTATION-PTM(2025-2026)"
        description=" ORIENTATION-PTM "
      />
    </div>
  );
}
