import React from "react";
import tiger from "../assets/tiger.jpg";
import waiter from "../assets/waiter.jpg";
import penguin from "../assets/penguin.jpg";
import white from "../assets/white.jpg";
import bike from "../assets/bike.jpg";

const images = [tiger, waiter, penguin, white, bike];

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="flex gap-6 w-full max-w-4xl">
        {images.map((src, index) => (
          <div
            key={index}
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
              src={src}
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
