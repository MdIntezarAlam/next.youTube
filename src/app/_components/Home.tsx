"use client";
import React, { useEffect, useState } from "react";
import { useFetchApi } from "@/lib/utils/useFetchApi";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import VideoSection from "@/components/HomeSection/VideoSection";

const HomeComponents = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    useFetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      if (data.error) {
        setError(data.error);
        setVideos([]);
      } else {
        setError(null);
        setVideos(data.items);
      }
    });
  }, [selectedCategory]);

  return (
    <div className="grid lg:grid-cols-5 gap-1 bg-transparent h-full overflow-hidden mt-12 pt-2">
      <div className="lg:block lg:top-0 col-span-5 lg:col-span-1 bg-secondary h-[40px] lg:h-full overflow-auto flex items-center  ">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="col-span-5 lg:col-span-4 bg-secondary h-screen lg:h-full overflow-auto p-4 flex flex-col gap-8">
        <h1 className="text-xl font-medium">
          <span className="font-thin">Category</span> : {selectedCategory}
        </h1>
        {error ? (
          <div className="text-destructive flex items-center justify-center m-auto lg:text-4xl text-center px-5">
            {error}
          </div>
        ) : (
          <VideoSection videos={videos} />
        )}
      </div>
    </div>
  );
};

export default HomeComponents;
