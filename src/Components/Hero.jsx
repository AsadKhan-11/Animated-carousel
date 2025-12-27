import React, { useState } from "react";
import tiger from "../assets/tiger.jpg";
import waiter from "../assets/waiter.jpg";
import penguin from "../assets/penguin.jpg";
import white from "../assets/white.jpg";
import bike from "../assets/bike.jpg";

const images = [
  { name: tiger, bg: "#e48023" },
  { name: waiter, bg: "#793e07" },
  { name: penguin, bg: "#b113d8" },
  { name: white, bg: "#d88313" },
  { name: bike, bg: "#137688" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className={`relative h-screen bg-[#e48023] flex justify-center items-center px-4 sm:px-6 lg:px-8 transition-colors duration-300   
      `}
      style={{
        backgroundColor:
          activeIndex !== null ? images[activeIndex].bg : "white",
      }}
    >
      <div className="absolute blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-25 rounded-full h-4/5 w-4/5"></div>
      <div className="flex gap-6 w-full max-w-4xl">
        {images.map((src, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="
   flex-1
  h-[350px]
  rounded-[100px]
  overflow-hidden
  cursor-pointer
  transition-[flex] duration-300
  will-change-[flex]
  hover:flex-[2]
  relative
              
            "
          >
            <img
              src={src.name}
              alt={`Image ${index}`}
              className=" absolute inset-0 block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
