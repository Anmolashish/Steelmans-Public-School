import Header from "@/app/Componenets/Header";
import MorePhotos from "@/app/OnePageComponent/MorePhotos";
import React from "react";

export default function page() {
    const data = [
        { src: "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0075.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0076.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0077.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0078.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0080.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/IMG-20250426-WA0082.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.15_da0d97a4.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.15_f115a4ed.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.16_1df35974.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.16_545ba374.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.17_104d6513.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.17_ed27dac0.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.18_44501db5.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.18_7bfd4f22.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.18_c8804809.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.19_6e48a64c.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.19_d4a229e6.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.19_ed8742a9.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.20_05887e3a.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.20_474f6ea1.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.20_9cee236c.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.20_d64294fc.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.21_5f03d218.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.21_b943d1fd.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.21_fc0518ee.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 12.59.22_0c526d0d.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 14.59.12_caf19474.jpg", alt: "EARTH DAY CELEBRATIONS" },
        { src: "/EARTH DAY CELEBRATIONS/WhatsApp Image 2025-04-22 at 14.59.13_b42c6204.jpg", alt: "EARTH DAY CELEBRATIONS" },
      ];
      



    return (
        <div>
            <Header heading={"World Earth Day (22nd April 2025)"} />
            <MorePhotos
                data={data}
                heading="World Earth Day (22nd April 2025)"
                description="Earth-day-celebrations"
            />
        </div>
    );
}
