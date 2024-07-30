"use client";
import VideoCard from "@/components/HomeSection/VideoCard";
import { useFetchApi } from "@/lib/utils/useFetchApi";
import { Item } from "@/Types/TypesVideos";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

interface VideoContainerProps {
  id: string;
}
const VideoContainer = ({ id }: VideoContainerProps) => {
  const [videoDetails, setVideoDetails] = React.useState<Item | null>(null);
  const [videos, setVideos] = React.useState<Item[]>([]);

  useEffect(() => {
    useFetchApi(`videos?part=snippet, statistic s&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    useFetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!videoDetails?.snippet) return <h1 className="mt-14">Loading...</h1>;
  return (
    <div className="flex gap-4 w-full bg-primary text-primary-foreground py-5 mt-12">
      <div className="w-[75%] flex flex-col gap-4 h-[570px] sticky top-0">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          height={"90%"}
          width={"100%"}
        />
        <div className="flex flex-col gap-y-1 font-medium px-5">
          <h1 className="text-2xl ">{videoDetails?.snippet?.title}</h1>
          <h1 className="text-sm text-secondary-foreground ">
            channel: {videoDetails?.snippet?.channelTitle}
          </h1>
        </div>
      </div>

      <div className="w-[25%] flex flex-col gap-4 pr-2">
        {videos?.map((item, i) => <VideoCard key={i} video={item} />)}
      </div>
    </div>
  );
};

export default VideoContainer;
