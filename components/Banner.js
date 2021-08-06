import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] ">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />

      <Fade bottom>
        <div className="absolute md:left-16 md:top-[100px] w-full top-2 text-center lg:text-left  md:w-96 ">
          <p className="text-lg md:text-4xl lg:text-6xl  text-center lg:text-left mx-20 md:mx-0  font-bold  text-white">
            Olympian & Paralympian Online Experiences
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
