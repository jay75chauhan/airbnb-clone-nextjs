import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/next-server/server/router";

function Header({ placeholder }) {
  const [session] = useSession();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        nOfGuests: numberOfGuests,
      },
    });

    setSearchInput("");
  };

  return (
    <header className="sticky  top-0 z-50 grid grid-cols-3 bg-transparent backdrop-blur-3xl shadow-md p-5 md:px-10   ">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex  items-center md:h-10 h-6 cursor-pointer my-auto "
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search ?"}
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
      {searchInput && (
        <div className="flex flex-col  mx-auto col-span-3 mt-2 bg-white shadow-lg">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            className="w-40 md:w-full"
          />
          <div className="flex  items-center border-b px-5 ">
            <h2 className="text-2xl  flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex my-4   ">
            <button
              onClick={() => {
                setSearchInput("");
              }}
              className="flex-grow px-3 shadow mx-24  p-1 text-sm font-medium border-2 rounded-lg  border-gray-400 active:bg-gray-400 active:text-white  text-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow mx-24 shadow text-sm border-2 font-medium rounded-lg  border-red-400 px-3 text-red-400 active:bg-red-400 active:text-white"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
