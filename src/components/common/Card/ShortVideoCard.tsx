import Image from "next/image";
import React from "react";

import { type TypesThumbnal } from "@/lib/@Types/TypeThumbnal";

export default function ShortCard({
  title1,
  title3,
  img_poster,
}: TypesThumbnal) {
  return (
    <div className="w-full min-h-56 rounded-lg flex flex-col items-center gap-y-2 bg-secondary text-primary-foreground hover:bg-border">
      <div className="w-full h-[80%]">
        <Image
          src={img_poster}
          width={100}
          height={100}
          alt="thumbnal"
          className="object-cover w-full h-full rounded-tr-lg rounded-tl-lg"
        />
      </div>
      <div className="text-xs text-secondary-foreground p-2">
        <h1 className="text-sm text-left font-semibold text-primary-foreground mb-2">
          {title1}
        </h1>
        <h5>{title3}</h5>
      </div>
    </div>
  );
}
