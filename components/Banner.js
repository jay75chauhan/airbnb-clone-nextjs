import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Banner({ img, text }) {
  return (
    <div className="relative   -mt-32 h-[450px] sm:h-[450px] md:h-[500px] lg:h-[600px] ">
      <Image src={img} layout="fill" objectFit="cover" />

      <Fade bottom>
        <div className="absolute md:left-16 md:top-[200px] w-full top-32 text-center lg:text-left  md:w-96 ">
          <p className="text-lg md:text-4xl lg:text-6xl  text-center lg:text-left mx-20 md:mx-0  font-bold  text-white">
            {text}
          </p>
          <button className="text-sm text text-black bg-white px-4 py-2 rounded-lg mt-5 lg:mt-8 lg: cursor-pointer font-medium">
            Exolire now
          </button>
        </div>
      </Fade>
    </div>
  );
}

export default Banner;
