"use client";
import React, { useEffect, useState } from "react";
import VideoCard from "@/components/HomeSection/VideoCard";
import { useFetchApi } from "@/lib/utils/useFetchApi";
import { Item } from "@/Types/TypesVideos";
import ReactPlayer from "react-player";
import SkeletonVideoCard from "@/components/HomeSection/VideoCardSkelaton";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoContainerProps {
  id: string;
}

const VideoContainer = ({ id }: VideoContainerProps) => {
  const [videoDetails, setVideoDetails] = useState<Item | null>(null);
  const [videos, setVideos] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    useFetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      if (data.error) {
        setError(data.error);
        setVideoDetails(null);
      } else {
        setError(null);
        setVideoDetails(data.items[0]);
      }
      setLoading(false);
    });

    useFetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        if (data.error) {
          setError(data.error);
          setVideos([]);
        } else {
          setError(null);
          setVideos(data.items);
        }
      }
    );
  }, [id]);

  if (loading) return <VideoCaontainerSkeleton />;
  if (error) return <h1 className="mt-14 text-destructive">{error}</h1>;
  if (!videoDetails?.snippet)
    return (
      <h1 className="min-h-screen bg-primary text-primary-foreground mt-12 py-2 text-center">
        No video details found
      </h1>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full bg-primary text-primary-foreground py-5 mt-12">
      <div className="w-full lg:w-[75%] flex flex-col gap-4 h-[570px] sticky top-0 bg-primary text-primary-foreground pb-4 lg:pb-0">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          height={"90%"}
          width={"100%"}
        />
        <div className="flex flex-col gap-y-1 font-medium px-5">
          <h1 className="lg:text-2xl ">{videoDetails?.snippet?.title}</h1>
          <h1 className="text-sm text-secondary-foreground ">
            channel: {videoDetails?.snippet?.channelTitle}
          </h1>
        </div>
      </div>

      <div className="w-full lg:w-[25%] flex flex-col gap-4  px-4 lg:px-0 lg:pr-2">
        {videos.length === 0
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <VideoCaontainerSkeleton />
              </div>
            ))
          : videos.map((item, i) => <VideoCard key={i} video={item} />)}
      </div>
    </div>
  );
};

export default VideoContainer;

const VideoCaontainerSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full bg-primary text-primary-foreground py-5 mt-12">
      <div className="w-full lg:w-[75%] flex flex-col gap-4 h-[570px] sticky top-0 bg-primary text-primary-foreground pb-4 lg:pb-0">
        <Skeleton className="w-full h-[90%] flex flex-col gap-4 pb-2 rounded-md bg-card text-primary-foreground cursor-pointer animate-pulse">
          <Skeleton className="h-[90%] w-full bg-gray-300 rounded-t-md"></Skeleton>
          <Skeleton className="py-2 w-full flex gap-2 px-2">
            <Skeleton className="w-10 h-10 bg-gray-300 rounded-full"></Skeleton>
            <Skeleton className="flex flex-col gap-1 w-[80%]">
              <Skeleton className="h-4 bg-gray-300 rounded"></Skeleton>
              <Skeleton className="h-3 bg-gray-300 rounded mt-1"></Skeleton>
            </Skeleton>
          </Skeleton>
        </Skeleton>{" "}
      </div>

      <div className="w-full lg:w-[25%] flex flex-col gap-4  px-4 lg:px-0 lg:pr-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <SkeletonVideoCard />
          </div>
        ))}
      </div>
    </div>
  );
};
