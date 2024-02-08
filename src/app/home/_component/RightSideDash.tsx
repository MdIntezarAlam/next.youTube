import React from "react";
import { IoClose } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { type TypesThumbnal } from "@/lib/@Types/TypeThumbnal";
import VideoCard from "@/components/common/Card/VideoCard";
import CustomText from "@/components/common/custom/CustomText";
import ShortVideoCard from "@/components/common/Card/ShortVideoCard";

import {
  videoArr,
  shortArr,
  infinityArr,
  breakNewsArr,
} from "@/lib/store_data/data";
import Header from "@/components/common/header/Header";
import ButtonGroup from "@/components/common/Card/ButtonGroup";

export default function RightSideDash() {
  return (
    <div className="w-[83%] pe-5 bg-secondary ">
      <header className="bg-secondary text-primary-foreground flex flex-col gap-y-3 py-2.5 z-50 px-5">
        <Header />
        <ButtonGroup />
      </header>

      {/* will start work from here... with all checking */}
      <div className="h-full overflow-y-auto pt-5 bg-transparent">
        <main className="flex-1 bg-primary text-primary-foreground overflow-y-auto flex flex-col gap-y-4 section">
          <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
            {videoArr.map((items: TypesThumbnal) => (
              <VideoCard key={items.id} {...items} />
            ))}
          </div>

          <CustomText
            Text1={"Short"}
            Text2={""}
            lIcon={<SiYoutubeshorts className="text-destructive text-xl" />}
            RIcon={<IoClose className="text-2xl" />}
          />
          <div className="w-full grid grid-rows-1 grid-cols-5 gap-x-3 gap-y-3  cursor-pointer">
            {shortArr.map((items: TypesThumbnal) => (
              <ShortVideoCard key={items.id} {...items} />
            ))}
          </div>
          {/* <CustomText
            Text1={"Breaking News"}
            Text2={" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            lIcon={undefined}
            RIcon={<IoClose className="text-2xl" />}
          />
          <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
            {breakNewsArr.map((items: TypesThumbnal) => (
              <VideoCard key={items.id} {...items} />
            ))}
          </div>

          <div className="w-full flex items-center justify-between py-5">
            <h1 className="text-xl">More</h1>
          </div>
          <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
            {infinityArr.map((items: TypesThumbnal) => (
              <VideoCard key={items.id} {...items} />
            ))}
          </div> */}
        </main>
      </div>
    </div>
  );
}
