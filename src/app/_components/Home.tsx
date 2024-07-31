"use client";
import React, { useEffect, useState } from "react";
import { useFetchApi } from "@/lib/utils/useFetchApi";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import VideoSection from "@/components/HomeSection/VideoSection";
import SkeletonVideoCard from "@/components/HomeSection/VideoCardSkelaton";
import { Item } from "@/Types/TypesVideos";

const HomeComponents = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    useFetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      if (data.error) {
        setError(data.error);
        setVideos([]);
      } else {
        setError(null);
        setVideos(data.items);
      }
      setLoading(false);
    });
  }, [selectedCategory]);

  return (
    <div className="grid lg:grid-cols-5 gap-1 bg-transparent h-full overflow-hidden mt-12 pt-2">
      <div className="lg:block lg:top-0 col-span-5 lg:col-span-1 bg-secondary h-[40px] lg:h-full overflow-auto flex items-center">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="col-span-5 lg:col-span-4 bg-secondary h-screen lg:h-full overflow-auto p-4 flex flex-col gap-8">
        <h1 className="text-xl font-medium">
          <span className="font-thin">Category</span>: {selectedCategory}
        </h1>
        {error ? (
          <div className="text-destructive flex items-center justify-center m-auto lg:text-4xl text-center px-5">
            {error}
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i}>
                <SkeletonVideoCard />
              </div>
            ))}
            <div className="mb-5"></div>
          </div>
        ) : (
          <VideoSection videos={videos} />
        )}
      </div>
    </div>
  );
};

export default HomeComponents;
