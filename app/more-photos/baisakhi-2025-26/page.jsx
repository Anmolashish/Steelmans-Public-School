import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
    const data = [
        {
          src: "/BAISAKHI/IMG-20250417-WA0052.jpg",
          alt: "Basant 2025 - Students celebrating the festival",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0153.jpg",
          alt: "Basant 2025 - Traditional decorations on display",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0154.jpg",
          alt: "Basant 2025 - Group enjoying the festivities",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0162.jpg",
          alt: "Basant 2025 - Students in cultural attire",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0165.jpg",
          alt: "Basant 2025 - Group photo under festive decor",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0173.jpg",
          alt: "Basant 2025 - Kite flying event",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0303.jpg",
          alt: "Basant 2025 - Performance on stage",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0305.jpg",
          alt: "Basant 2025 - Students clapping during event",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0309.jpg",
          alt: "Basant 2025 - Decorated venue close-up",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0310.jpg",
          alt: "Basant 2025 - Students posing with props",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0311.jpg",
          alt: "Basant 2025 - Group enjoying traditional food",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0312.jpg",
          alt: "Basant 2025 - Faculty members at the event",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0315.jpg",
          alt: "Basant 2025 - Friends taking a selfie",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0316.jpg",
          alt: "Basant 2025 - Group photo in front of banner",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0317.jpg",
          alt: "Basant 2025 - Traditional dance performance",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0318.jpg",
          alt: "Basant 2025 - Students enjoying music",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0319.jpg",
          alt: "Basant 2025 - Colorful decorations",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0320.jpg",
          alt: "Basant 2025 - Cultural celebration moments",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0321.jpg",
          alt: "Basant 2025 - Group dance performance",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0322.jpg",
          alt: "Basant 2025 - Students interacting joyfully",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0324.jpg",
          alt: "Basant 2025 - Kite flying competition",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0325.jpg",
          alt: "Basant 2025 - Happy faces in traditional wear",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0327.jpg",
          alt: "Basant 2025 - Students cheering for performers",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0328.jpg",
          alt: "Basant 2025 - Venue filled with excitement",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0329.jpg",
          alt: "Basant 2025 - Music and joy all around",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0330.jpg",
          alt: "Basant 2025 - Traditional performances continue",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0331.jpg",
          alt: "Basant 2025 - Laughter and celebration",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0332.jpg",
          alt: "Basant 2025 - Bright colors and good vibes",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0333.jpg",
          alt: "Basant 2025 - Friends posing for pictures",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0334.jpg",
          alt: "Basant 2025 - Crowd enjoying the show",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0336.jpg",
          alt: "Basant 2025 - Cultural showcase continues",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0337.jpg",
          alt: "Basant 2025 - Joyful expressions captured",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0338.jpg",
          alt: "Basant 2025 - Group picture under lanterns",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0340.jpg",
          alt: "Basant 2025 - Kite display in the sky",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0341.jpg",
          alt: "Basant 2025 - Colorful outfits of students",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0342.jpg",
          alt: "Basant 2025 - Traditional Bhangra dance",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0343.jpg",
          alt: "Basant 2025 - Group photo with performers",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0344.jpg",
          alt: "Basant 2025 - Staff joining the fun",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0345.jpg",
          alt: "Basant 2025 - Students with festive props",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0347.jpg",
          alt: "Basant 2025 - Ending ceremony snapshot",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0348.jpg",
          alt: "Basant 2025 - Group shot of organizing team",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0349.jpg",
          alt: "Basant 2025 - Students capturing memories",
        },
        {
          src: "/BAISAKHI/IMG-20250417-WA0351.jpg",
          alt: "Basant 2025 - Final celebration picture",
        }
      ];
      
  return (
    <>
      <Header heading={"Baisakhi (2025-26)"} />
      <MorePhotos
        data={data}
        heading="Baisakhi (2025-26)"
        description="Explore our students' Baisakhi (2025-26) gallary"
      />
    </>
  );
}
