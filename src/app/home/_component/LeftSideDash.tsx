"use client";
import Link from "next/link";
import React from "react";
import { BiLike, BiSolidMoviePlay } from "react-icons/bi";
import { CiFlag1 } from "react-icons/ci";
import { FaShieldAlt, FaYoutube } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { GoLightBulb, GoVideo } from "react-icons/go";
import { GrShop } from "react-icons/gr";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoIosSettings, IoMdHome, IoMdMusicalNote } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";
import { Separator } from "@/components/ui/separator";
import { CopyRightCard } from "@/components/common/Card/CopyRightCard";
import { IoLogoYoutube } from "react-icons/io5";

import {
  IoHelpCircleOutline,
  IoGameControllerSharp,
  IoMenu,
} from "react-icons/io5";
import {
  MdExplore,
  MdHistory,
  MdPodcasts,
  MdSubscriptions,
  MdOutlineCellTower,
  MdOutlineFeedback,
  MdOutlineOndemandVideo,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { LeftSideCard } from "@/components/common/Card/LeftSideCard";

export default function LeftSideDash() {
  return (
    <aside className="w-[17%] text-primary-foreground flex flex-col px-5 pt-3">
      <nav className="flex items-center gap-x-4 cursor-pointer z-50 pb-2">
        <IoMenu size={28} />
        <Link href={"/"} passHref className="flex items-center gap-x-1">
          <IoLogoYoutube className="text-destructive text-2xl" />
          <h1 className="text-xl font-semibold -tracking-wider">YouTube</h1>
        </Link>
      </nav>

      <main className="flex flex-col gap-y-2 overflow-y-auto">
        <LeftSideCard Title="" data={cardArr} />
        <Separator />
        <LeftSideCard Title="Library" data={cardData2} />
        <Separator />
        <LeftSideCard Title="Subscription" data={cardData3} />
        <Separator />
        <LeftSideCard Title="Explore" data={cardData4} />
        <Separator />
        <LeftSideCard Title="More From YouTube" data={cardData5} />
        <Separator />
        <LeftSideCard Title="Setting" data={cardData6} />
        <Separator />
        <CopyRightCard />
      </main>
    </aside>
  );
}

const cardArr = [
  {
    id: 0,
    title: "Home",
    path: "/",
    icons: <IoMdHome size={24} />,
  },
  {
    id: 1,
    title: "Explore",
    path: "/",
    icons: <MdExplore size={24} />,
  },
  {
    id: 2,
    title: "Shorts",
    path: "/short",
    icons: <SiYoutubeshorts size={24} />,
  },
  {
    id: 3,

    title: "Subscriptions",
    path: "/",
    icons: <MdSubscriptions size={24} />,
  },
];
const cardData2 = [
  {
    id: 0,
    icons: <MdOutlineVideoLibrary size={24} />,
    title: "Library",
  },
  { id: 1, icons: <MdHistory size={24} />, title: "History" },
  { id: 2, icons: <GoVideo size={24} />, title: "Your videos" },
  {
    id: 3,
    icons: <MdOutlineWatchLater size={24} />,
    title: "Watch later",
  },
  { id: 4, icons: <BiLike size={24} />, title: "Liked video" },
];
const cardData3 = [
  {
    id: 0,
    icons: "/assets/u1.png",
    title: "Code with hurry",
  },
  { id: 1, icons: "/assets/u2.png", title: "Intezar" },
  { id: 2, icons: "/assets/u1.png", title: "Rahul Kumar" },
  {
    id: 3,
    icons: "/assets/u2.png",
    title: "Narendra Modi",
  },
  { id: 4, icons: "/assets/u1.png", title: "Kabeer Singh" },
];
const cardData4 = [
  {
    id: 0,
    icons: <HiOutlineTrendingUp size={24} />,
    title: "Tranding",
  },
  { id: 1, icons: <GrShop size={24} />, title: "Shoping" },
  { id: 2, icons: <IoMdMusicalNote size={24} />, title: "Music" },
  {
    id: 3,
    icons: <BiSolidMoviePlay size={24} />,
    title: "Movies",
  },
  { id: 4, icons: <MdOutlineCellTower size={24} />, title: "Live" },
  {
    id: 4,
    icons: <IoGameControllerSharp size={24} />,
    title: "Gaming",
  },
  { id: 4, icons: <HiOutlineNewspaper size={24} />, title: "News" },
  { id: 4, icons: <TfiCup size={24} />, title: "Sports" },
  { id: 4, icons: <GoLightBulb size={24} />, title: "Learning" },
  {
    id: 4,
    icons: <FaShieldAlt size={24} />,
    title: "Fashion & Beauty",
  },
  { id: 4, icons: <MdPodcasts size={24} />, title: "Podcasts" },
];
const cardData5 = [
  {
    id: 0,
    icons: <FaYoutube className="text-xl text-destructive" />,
    title: "YouTube Premium",
  },
  {
    id: 1,
    icons: <MdOutlineOndemandVideo className="text-xl text-destructive" />,
    title: "YouTube Studio",
  },
  {
    id: 2,
    icons: <FaMusic className="text-xl text-destructive" />,
    title: "YouTube Music",
  },
  {
    id: 3,
    icons: <TbBrandYoutubeKids className="text-xl text-destructive" />,
    title: "YouTube Kids",
  },
];
const cardData6 = [
  {
    id: 0,
    icons: <IoIosSettings size={24} />,
    title: "Settings",
  },
  {
    id: 1,
    icons: <CiFlag1 size={24} />,
    title: "Report History",
  },
  {
    id: 2,
    icons: <IoHelpCircleOutline size={24} />,
    title: "Help",
  },
  {
    id: 3,
    icons: <MdOutlineFeedback size={24} />,
    title: "Send Feedback",
  },
];
