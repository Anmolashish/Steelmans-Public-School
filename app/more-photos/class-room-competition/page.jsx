import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
  const data = [
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0061.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0062.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0063.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0064.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0065.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0066.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0067.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0068.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0069.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0070.jpg", alt: "CLASS ROOM COMPETITION" },
    { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0071.jpg", alt: "CLASS ROOM COMPETITION" },
     { src: "/CLASS ROOM COMPETITION/IMG-20250426-WA0073.jpg", alt: "CLASS ROOM COMPETITION" },
    ];

  return (
    <div>
      <Header heading={"CLASS ROOM COMPETITION"} />
      <MorePhotos
        data={data}
        heading="CLASSROOM DECORATION COMPETITION(2025-2026)"
        description="CLASSROOM DECORATION COMPETITION "
      />
    </div>
  );
}
