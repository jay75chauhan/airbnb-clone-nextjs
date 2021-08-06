import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10   ">
      {/* left */}
      <div className="relative flex  items-center md:h-10 h-6 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center  bg-white border md:border-2 rounded-full py-2 shadow-sm md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search ?"
          className="pl-5 bg-transparent outline-none flex-grow text-xs md:text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="h-8 bg-red-400 hidden hover:animate-spin md:inline-flex text-white rounded-full  cursor-pointer shadow p-2 md:mx-2" />
      </div>

      {/* Rigt */}
      <div className="flex items-center justify-end text-gray-500  space-x-4">
        <p className="hidden md:inline cursor-pointer hover:underline">
          Hii {session.user.name}
        </p>
        <GlobeAltIcon className="h-6 animate-spin text-blue-400" />

        <div
          onClick={() => signOut()}
          className="flex items-center justify-center cursor-pointer duration-500 hover:scale-105 space-x-2 border-2 p-2 rounded-full"
        >
          <MenuIcon className="h-6" />
          <Image
            src={session.user.image}
            onClick={signOut}
            className="rounded-full  "
            width="30"
            height="30"
            layout="fixed"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
