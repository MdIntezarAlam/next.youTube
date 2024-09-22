"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import NavSidebarSheet from "../Sidebar/NavSidebarSheet";
import { SearchBar } from "./SearchBar";

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
      <div className="lg:grid grid-cols-5 gap-1 px-4 w-full hidden  ">
        <div
          className="col-span-1 flex items-center gap-1"
          onClick={() => router.push("/")}
        >
          <Image alt="icons" src={"/ytb.png"} width={30} height={30} />
          <h1 className="text-xl font-bold">YouTube</h1>
        </div>
        <div className="col-span-4 flex items-center gap-12 pl-0 ">
          <div className="flex items-center gap-4 justify-center flex-1">
            <form
              onSubmit={searchFunction}
              className="flex-1 flex items-center rounded-full bg-secondary border border-border h-10"
            >
              <input
                type="search"
                placeholder="Search here....."
                className="w-full bg-transparent outline-none border-0 cursor-pointer pl-4 placeholder:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="bg-border rounded-tr-full rounded-br-full cursor-pointer px-4">
                <CiSearch className="text-xl h-10" />
              </div>
            </form>

            <IoMdMic className="h-10 w-10 p-2 bg-border rounded-full cursor-pointer" />
          </div>
          <div className="text-secondary-foreground w-10 h-10">
            <Link href={"/auth/login"}>
              <Image
                src="/user.jpg"
                width={100}
                height={100}
                alt="user"
                className="rounded-full w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile devices */}
      <div className="lg:hidden flex items-center justify-between px-3 w-full">
        <div className="flex items-center gap-4">
          <NavSidebarSheet />
          <div
            className="flex items-center gap-1"
            onClick={() => router.push("/")}
          >
            <Image alt="icons" src={"/ytb.png"} width={30} height={30} />
            <h1 className="text-xl font-bold">YouTube</h1>
          </div>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
