"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { TiSocialYoutube } from "react-icons/ti";

export const Navbar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const searchFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search/${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <nav className="flex items-center  fixed top-0 z-50 bg-primary w-full py-2 text-primary-foreground cursor-pointer">
      <div className="grid grid-cols-5 gap-1 px-4 w-full">
        <div
          className="col-span-1 flex items-center gap-1"
          onClick={() => router.push("/")}
        >
          <TiSocialYoutube className="text-4xl text-[#ff0000]" />
          <h1 className="text-xs lg:text-xl font-normal">YouTube</h1>
        </div>
        <div className="col-span-4 flex items-center gap-12 pl-4 lg:pl-0 ">
          <div className="flex items-center gap-2 lg:gap-4 justify-center flex-1">
            <form
              onSubmit={searchFunction}
              className="flex-1 flex items-center rounded-full bg-secondary border border-border"
            >
              <input
                type="search"
                placeholder="Search here....."
                className="w-full bg-transparent outline-none border-0 cursor-pointer pl-4 placeholder:text-xs lg:placeholder:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="bg-border rounded-tr-full rounded-br-full cursor-pointer px-4">
                <CiSearch className="text-xl h-9" />
              </div>
            </form>
            <button
              type="submit"
              className="bg-border h-9 w-9 flex items-center justify-center rounded-full cursor-pointer"
            >
              <IoMdMic className="text-xl" />
            </button>
          </div>{" "}
          {/* <FaCircleUser className="hidden lg:block text-4xl text-secondary-foreground" /> */}
          <div
            className="hidden lg:block  text-secondary-foreground w-10 h-10"
            onClick={() => router.push("https://intezar-dev.netlify.app/")}
          >
            <Image
              src="/user.png"
              width={100}
              height={100}
              alt="user"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
