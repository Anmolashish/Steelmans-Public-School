"use client";
import React, { useState, useEffect } from "react";
import Header from "@/app/Componenets/Header";
import { FaUserTie } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Clubs Data
const clubsData = [
  {
    name: "SPIRITUAL CLUB",
    members: ["ALL STAFF MEMBERS"],
    images: [
      "/spiritual club/WhatsApp Image 2025-05-07 at 11.42.26_53dcf94a.jpg",
      "/spiritual club/WhatsApp Image 2025-05-23 at 12.08.34_69ce8714.jpg",
      "/spiritual club/WhatsApp Image 2025-05-23 at 12.09.52_3fffebc7.jpg",
      "/spiritual club/WhatsApp Image 2025-05-23 at 12.14.34_7b107aac.jpg",
    ],

  },
  {
    name: "GARDENING CLUB",
    members: ["ALL STAFF MEMBERS"],
    images: [
      "/GARDENING/WhatsApp Image 2025-05-17 at 13.07.55_88fa1679.jpg",
      "/GARDENING/WhatsApp Image 2025-05-17 at 13.07.59_fecc5808.jpg",
      "/GARDENING/WhatsApp Image 2025-05-17 at 13.08.00_57e1cd6e.jpg",
    ],
  },
  {
    name: "G.K/ SOCIAL SCIENCE CLUB",
    members: ["HEAD- MR. GURDHIR SINGH", "VICE HEAD- MS. POONAM LATA"],
    images: [
      "/G.K.SOCIALSCIENCECLUB/",
      "/G.K.SOCIALSCIENCECLUB/",
      "/G.K.SOCIALSCIENCECLUB/",
      "/G.K.SOCIALSCIENCECLUB/",



    ],
  },
  {
    name: "CULTURAL CLUB",
    members: ["HEAD- MS. DEVINDER KAUR", "VICE HEAD- MS. KULWINDER KAUR"],
    images: ["/images/cultural.jpg"],
  },
  {
    name: "MATHS CLUB",
    members: ["HEAD- MS. SEEMA", "VICE HEAD- MS. MINAKSHI CHAWLA"],
    images: [
      "/MATHS-CLUB/IMG-20250523-WA0263.jpg",
      "/MATHS-CLUB/IMG-20250523-WA0265.jpg",
      "/MATHS-CLUB/IMG-20250523-WA0266.jpg",





    ],
  },
  {
    name: "SCIENCE CLUB",
    members: ["HEAD- MS. SUJATA KUMARI", "VICE HEAD- MS. SUMANDEEP KAUR"],
    images: [
      "/SCIENCE-CLUB/WhatsApp Image 2025-05-23 at 12.27.58_d0ba8098.jpg",
      "/SCIENCE-CLUB/WhatsApp Image 2025-05-23 at 12.28.15_50e0b991.jpg",
      "/SCIENCE-CLUB/WhatsApp Image 2025-05-23 at 12.28.34_220b4407.jpg",
      "/SCIENCE-CLUB/WhatsApp Image 2025-05-23 at 12.28.51_bab583c2.jpg",






    ],
  },
  {
    name: "LANGUAGE CLUB - ENGLISH",
    members: ["HEAD- MS. DIVYA SHARMA", "VICE HEAD- MS. MEHAK DUTT"],
    images: ["/images/english.jpg"],
  },
  {
    name: "LANGUAGE CLUB - PUNJABI",
    members: ["HEAD- MS. KULWINDER KAUR", "VICE HEAD- MS. NEETU MEHTA"],
    images: [

      "/PUNJABI-CLUB/WhatsApp Image 2025-05-23 at 12.22.48_03eb275c.jpg",
      "/PUNJABI-CLUB/WhatsApp Image 2025-05-23 at 12.22.48_7bbca988.jpg",

    ],
  },
  {
    name: "LANGUAGE CLUB - HINDI",
    members: ["HEAD- MS. ANITA THAKUR", "VICE HEAD- MS. RIPANJEET KAUR"],
    images: ["/images/hindi.jpg"],
  },
  {
    name: "ART AND HANDICRAFT CLUB",
    members: ["HEAD- MS. BALJINDER KAUR", "VICE HEAD- MS. MANSANTOKH"],
    images: [
      "/VOCATIONAL-CUB/IMG-20250517-WA0185.jpg",
      "/VOCATIONAL-CUB/IMG-20250517-WA0223.jpg",
      "/VOCATIONAL-CUB/IMG-20250517-WA0227.jpg",
      "/VOCATIONAL-CUB/IMG-20250517-WA0229.jpg",
      "/HANDICRAFT-CLUB/WhatsApp Image 2025-05-17 at 13.09.24_a242040e.jpg",
      "/HANDICRAFT-CLUB/WhatsApp Image 2025-05-17 at 13.09.25_0a10ad68.jpg",
      "/HANDICRAFT-CLUB/WhatsApp Image 2025-05-17 at 13.09.28_77b38d1e.jpg",
    ],
  },
  {
    name: "SPORTS AND YOGA CLUB",
    members: [
      "HEAD- MR. GURDHIR SINGH",
      "VICE HEAD- MS. SUKHWINDER KAUR",
      "MR. SONU",
      "MR. BHUSHAN",
    ],
    images: ["/images/sports.jpg"],
  },
  {
    name: "DIGITAL CLUB",
    members: ["HEAD- MS. SUKHDEEP KAUR", "VICE HEAD- MS. AMANDEEP KAUR"],
    images: ["/images/digital.jpg"],
  },
  {
    name: "VOCATIONAL CLUB - MUSIC",
    members: [
      "HEAD- MR. AMRITRAJ SINGH",
      "VICE HEAD- MS. SUMANDEEP KAUR",
      "MS. SEEMA BAJAJ",
    ],
    images: [

      "/VOCATIONAL-CUB/WhatsApp Image 2025-05-17 at 13.09.30_ce113fa0.jpg",
      "/VOCATIONAL-CUB/WhatsApp Image 2025-05-17 at 13.09.30_cf83ae96.jpg ",
      "/VOCATIONAL-CUB/WhatsApp Image 2025-05-17 at 13.09.31_4cbaf93d.jpg",
      "/VOCATIONAL-CUB/WhatsApp Image 2025-05-17 at 13.09.31_4cbaf93d.jpg",
    ],
  },
  {
    name: "VOCATIONAL CLUB - DANCE",
    members: [
      "HEAD- MR. GURDHIR SINGH",
      "MS. DEVINDER KAUR",
      "VICE HEAD- MS. KULWINDER KAUR",
      "MS. ARJU RAJPUT",
    ],
    images: [
      "/images/dance1.jpg",
      "/images/dance2.jpg",
      "/images/dance3.jpg",
    ],
  },
];

export default function ClubsPage() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const closeModal = () => {
    setSelectedClub(null);
    setSelectedImage(null);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedClub) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedClub]);

  return (
    <div className="bg-white min-h-screen px-  py- text-gray-800 font-sans transition-all duration-500 ease-in-out">
      <Header heading="Clubs" />

      <div className="text-center my-10">
        <h2 className="text-4xl font-extrabold text-yellow-600 mb-1 tracking-wide transition-all duration-500">
          STEELMANS PUBLIC SCHOOL, CHANNO
        </h2>
        <p className="text-lg text-gray-500">Session 2025–26</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-2">
        {clubsData.map((club, index) => (
          <div
            key={index}
            onClick={() => handleClubClick(club)}
            className="bg-white rounded-2xl border border-yellow-500/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-yellow-600 group-hover:text-yellow-700 transition-all">
                {club.name}
              </h3>
              <span className="bg-yellow-300 text-black px-3 py-1 text-xs rounded-full font-semibold">
                {club.members.length} {club.members.length > 1 ? "Members" : "Member"}
              </span>
            </div>
            <ul className="space-y-1 text-gray-600 text-sm">
              {club.members.map((member, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaUserTie className="text-yellow-500 text-sm" />
                  {member}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedClub && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className="max-w-3xl w-full bg-white/90 border border-yellow-500/50 rounded-2xl p-6 text-gray-800 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-400 text-2xl"
            >
              <IoClose />
            </button>

            {/* Club Heading */}
            <h3 className="text-3xl font-bold text-yellow-600 text-center mb-6">
              {selectedClub.name}
            </h3>

            {/* Images Grid with Scroll */}
            {selectedClub.images?.length > 0 && (
              <div className="overflow-y-scroll max-h-[400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {selectedClub.images.slice(0, 10).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Club ${idx + 1}`}
                    className="w-full h-40 object-cover rounded-xl border border-yellow-400 shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => handleImageClick(img)}
                  />
                ))}
              </div>
            )}

            {/* Members List */}
            <ul className="space-y-2 text-gray-600 text-sm">
              {selectedClub.members.map((member, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 border-b border-gray-200 pb-2"
                >
                  <FaUserTie className="text-yellow-500" />
                  {member}
                </li>
              ))}
            </ul>

            {/* Close Button (bottom) */}
            <button
              className="mt-8 text-black bg-yellow-200 py-2 px-6 rounded-full hover:bg-yellow-500 transition-all font-semibold shadow-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full screen"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
