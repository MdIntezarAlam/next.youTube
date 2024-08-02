/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import { type Snippet } from "@/Types/TypesVideos";

interface VideoCardProps {
  video: {
    id: { videoId: string };
    snippet: Snippet;
  };
}
export const demoVideoUrl = "/video/GDa8kZLNhJ4";

const VideoCard = ({ video }: VideoCardProps) => {
  // console.log("video", video);
  return (
    <div className="w-full h-[295px] flex flex-col gap-4 pb-2 rounded-md bg-card text-primary-foreground cursor-pointer">
      <Link
        href={
          video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl
        }
        className="h-[180px] w-full"
      >
        <img
          width={100}
          height={100}
          alt={video?.snippet?.title}
          src={video?.snippet?.thumbnails?.high?.url ?? "/empty.jpg"}
          className="h-full w-full object-cover rounded-t-md"
        />
      </Link>
      <div className="py-2 w-full  flex gap-2 px-2">
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="flex flex-col gap-1 w-[80%]">
          <h1 className="text-sm font-semibold ">
            {video?.snippet?.title.slice(0, 80)}
          </h1>
          <h2 className="text-xs text-secondary-foreground">
            channel : {video?.snippet?.channelTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
