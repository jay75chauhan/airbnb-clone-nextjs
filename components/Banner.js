import React from "react";
import Image from "next/image";
import { Wave } from "react-animated-text";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] opacity-95">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute md:left-16 md:top-[170px] w-full top-2 text-center lg:text-left  md:w-96 ">
        <p className="text-lg md:text-4xl lg:text-6xl  text-center lg:text-left mx-20 md:mx-0  font-bold  text-white">
          Olympian & Paralympian Online Experiences
        </p>
        <button className="text-sm text text-black bg-white px-4 py-2 rounded-lg mt-5 lg:mt-8 lg: cursor-pointer font-medium">
          Exolire now
        </button>
      </div>

      <ChevronDownIcon className="md:inline hidden h-16 text-black animate-bounce absolute bottom-1  sm:bottom-4 w-full text-center" />
    </div>
  );
}

export default Banner;
