import React from "react";
import Image from "next/image";
import { TypesThumbnal } from "@/lib/@Types/TypeThumbnal";
export default function VideoCard({
  title1,
  title2,
  title3,
  img_poster,
  userImg,
}: TypesThumbnal) {
  return (
    <div className="w-full min-h-44 rounded-lg flex flex-col items-center gap-y-2 bg-secondary text-primary-foreground hover:bg-border">
      <div className="w-full h-[60%]">
        <Image
          width={100}
          height={100}
          alt="thumbnal"
          src={img_poster}
          className="w-full h-full rounded-tr-lg rounded-tl-lg"
        />
      </div>
      <div className="w-full flex gap-x-2.5 py-2 px-1">
        <div className="w-10 h-9">
          <Image
            src={userImg}
            width={100}
            height={100}
            alt="thumbnal"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        <div className="w-11/12 px-2 text-xs text-secondary-foreground">
          <h1 className="text-sm text-justify font-semibold text-primary-foreground">
            {title1}
          </h1>
          <h5>{title2}</h5>
          <h5>{title3}</h5>
        </div>
      </div>
    </div>
  );
}
