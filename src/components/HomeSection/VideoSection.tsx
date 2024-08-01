import React from "react";

import { type Item } from "@/Types/TypesVideos";

import VideoCard from "./VideoCard";

interface VideoSectionProps {
  videos: Item[];
}
const VideoSection = ({ videos }: VideoSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3  gap-y-8">
      {videos?.map((item, i) => (
        <div key={i}>{item?.id?.videoId && <VideoCard video={item} />}</div>
      ))}
      <div className="mb-5"></div>
    </div>
  );
};

export default VideoSection;
