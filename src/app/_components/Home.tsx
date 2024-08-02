/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import SkeletonVideoCard from "@/components/HomeSection/VideoCardSkelaton";
import VideoSection from "@/components/HomeSection/VideoSection";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useFetchApi } from "@/lib/utils/useFetchApi";
import { type Item } from "@/Types/TypesVideos";

import HomeNavScrollbar from "./HomeNavScrollbar";

const HomeComponents = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDataFromBackend = async () => {
    try {
      const responce = await axios.get("/api/youtube/auth");
      console.log("responce", responce);
    } catch (error) {}
  };
  useEffect(() => {
    void fetchDataFromBackend();
  }, []);
  useEffect(() => {
    setLoading(true);
    useFetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      if (data.error) {
        setError(data?.error);
        setVideos([]);
      } else {
        setError(null);
        setVideos(data?.items);
      }
      setLoading(false);
    });
  }, [selectedCategory]);

  return (
    <div className="grid lg:grid-cols-5 gap-1 bg-transparent h-full overflow-hidden mt-12 pt-2">
      <div className="hidden lg:block col-span-1 bg-primary h-full overflow-auto">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="col-span-5 lg:col-span-4 bg-secondary h-screen lg:h-full overflow-auto  flex flex-col gap-5">
        <HomeNavScrollbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <h1 className="text-xl font-medium mt-16 pt-4 px-2">
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
          <div className="px-4 lg:px-2">
            <VideoSection videos={videos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeComponents;
