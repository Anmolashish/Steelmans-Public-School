import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
    const data = [
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 15.11.31_5d92ca4f.jpg",
          alt: "Foundation Day 2025 - Students gathering at the venue",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 15.14.44_a41e3e2f.jpg",
          alt: "Foundation Day 2025 - Inaugural ceremony begins",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 15.16.41_7336794e.jpg",
          alt: "Foundation Day 2025 - Faculty addressing the audience",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.09.58_8bf3b351.jpg",
          alt: "Foundation Day 2025 - Guests of honor on stage",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.09.58_24dd2a54.jpg",
          alt: "Foundation Day 2025 - Audience enjoying the event",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.09.59_3d7cebdd.jpg",
          alt: "Foundation Day 2025 - Traditional dance performance",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.09.59_dc34dfd3.jpg",
          alt: "Foundation Day 2025 - Group photo on stage",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.10.31_c5aec1a8.jpg",
          alt: "Foundation Day 2025 - Cultural program underway",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.10.32_e6212f1c.jpg",
          alt: "Foundation Day 2025 - Students performing skit",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.17.07_9ae4afb8.jpg",
          alt: "Foundation Day 2025 - Celebration highlights",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.17.09_39b61d4b.jpg",
          alt: "Foundation Day 2025 - Performers receiving applause",
        },
        {
          src: "/Foundation Day Celebration/WhatsApp Image 2025-04-03 at 16.17.09_320ef9e4.jpg",
          alt: "Foundation Day 2025 - Grand finale with all participants",
        }
      ];
      
  return (
    <>
      <Header heading={"Foundation Day (2025-26)"} />
      <MorePhotos
        data={data}
        heading="Foundation Day (2025-26)"
        description="Explore our students' Foundation Day (2025-26) gallary"
      />
    </>
  );
}
