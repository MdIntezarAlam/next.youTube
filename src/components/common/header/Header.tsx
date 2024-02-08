import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosNotificationsOutline, IoMdMic } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";

export default function Header() {
  return (
    <nav className="flex items-center pl-20">
      <div className="flex-1 flex items-center justify-center gap-x-2">
        <div className="flex-1 flex items-center rounded-full bg-secondary border border-border">
          <input
            type="search"
            placeholder="Search here....."
            className="w-full bg-transparent outline-none border-0 cursor-pointer pl-4"
          />
          <div className="bg-border rounded-tr-full rounded-br-full cursor-pointer px-4">
            <CiSearch className="text-xl h-9" />
          </div>
        </div>
        <div className="bg-border h-9 w-9 flex items-center justify-center rounded-full cursor-pointer">
          <IoMdMic className="text-xl" />
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-end gap-x-4 cursor-pointer">
        <MdCreateNewFolder size={26} />
        <IoIosNotificationsOutline size={26} />
        <FaCircleUser size={28} />
      </div>
    </nav>
  );
}
