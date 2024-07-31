import React from "react";
import VideoCard from "./VideoCard";
import { Item } from "@/Types/TypesVideos";

interface VideoSectionProps {
  videos: Item[];
}
const VideoSection = ({ videos }: VideoSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
      {videos?.map((item, i) => (
        <div key={i}>{item?.id?.videoId && <VideoCard video={item} />}</div>
      ))}
      <div className="mb-5"></div>
    </div>
  );
};

export default VideoSection;
