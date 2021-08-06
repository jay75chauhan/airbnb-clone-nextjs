import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-3 my-5 mx-2 md:my-6 md:mx-5 bg-white cursor-pointer  hover:opacity-80 pr-3 rounded-xl shadow-md hover:shadow-2xl transition transform duration-500  hover:scale-105 ease-out ">
      <div className="relative h-24  w-40 md:h-52 md:w-80  flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className=" text-gray-700">{location}</p>
          <HeartIcon className="h-7 cursor-pointer  hover:animate-ping" />
        </div>

        <h4 className="text-xl ">{title}</h4>

        <div className="border-b-2 w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400 cursor-pointer hover:animate-spin" />
            {star}
          </p>

          <div>
            <p className="text-lg pb-2 font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
