"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Message from Founder",
    description:
      "GO CONFIDENTLY IN THE DIRECTION OF YOUR DREAMS LIVE THE LIFE, YOU HAVE IMAGINED ",
    img: "https://steelmansschool.com/wp-content/uploads/2019/02/founder-739x1024.jpg",
  },
  {
    title: "Message from President",
    description:
      "CHANGE INSIDE OF YOU BE A RAY OF SUNSHINE TO EVERYONE YOU MEET",
    img: "https://steelmansschool.com/wp-content/uploads/2019/02/president-768x604.jpg",
  },
  {
    title: "Message from Vice President",
    description:
      "THERE ARE VERY FEW PEOPLE WHO CAN DREAM BIG, AND EVEN FEWER, WHO ACT UPON IT",
    img: "https://steelmansschool.com/wp-content/uploads/2019/02/vice-president-768x582.jpg",
  },
  {
    title: "Message from Principal",
    description:
      "SUCCESS COMES TO THOSE WHO WORK HARD AND STAYS WITH THOSE, WHO DON’T REST ON THE LAURELS OF THE PAST",
    img: "https://steelmansschool.com/wp-content/uploads/2019/02/From-the-desk-of-Principal-ANJALI-GAUR-768x512.jpg",
  },
];

export default function HomePage5() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full min-h-[85vh] h-fit bg-[url(https://steelmansschool.com/wp-content/uploads/2015/10/bg_lastest_new.jpg)] bg-cover bg-center flex justify-center items-center py-10 overflow-hidden">
      <div className="w-full max-w-[1200px] h-full max-h-[70%] flex flex-col justify-between items-center relative gap-5">
        {/* Heading */}
        <div className="w-full">
          <h1 className="text-4xl font-bold text-white flex flex-col after:content-[''] after:block after:w-[10%] after:h-[1px] after:rounded-full after:mt-5 after:bg-white after:transition-all after:duration-300 hover:after:w-[30%] justify-center items-center text-center">
            Messages
            <span className="text-sm font-light mt-1">
              Here's the messages from all the authority of Steelmans public
              school
            </span>
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="relative w-[80%] max-md:w-[70%] min-h-[50vh]  flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex w-full items-center justify-between gap-8 max-sm:flex-col max-sm:text-center"
            >
              {/* Text Section */}
              <div className="w-1/2 text-white max-sm:w-full ">
                <h2 className="text-2xl max-sm:text-lg">
                  {slides[currentSlide].title}
                </h2>
                <h1 className="mt-4 max-sm:mt-1 font-bold text-5xl max-sm:text-3xl">
                  "{slides[currentSlide].description}"
                </h1>
              </div>

              {/* Image Section */}
              <div className="w-1/2 max-sm:w-full flex justify-center">
                <img
                  src={slides[currentSlide].img}
                  alt="Slide Image"
                  className=" w-1/2 h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-[-70px]  top-1/2 transform -translate-y-1/2 text-black rounded-full shadow-md transition"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios/50/FFFFFF/circled-chevron-left.png"
              alt="circled-chevron-left"
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 text-black rounded-full shadow-md  transition"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios/50/FFFFFF/circled-chevron-right--v1.png"
              alt="circled-chevron-right--v1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
