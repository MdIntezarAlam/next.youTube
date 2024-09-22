/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonVideoCard from "@/components/HomeSection/VideoCardSkelaton";
import VideoSection from "@/components/HomeSection/VideoSection";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import HomeNavScrollbar from "./HomeNavScrollbar";
import { useCategory } from "@/lib/slices/useCategory";
import { useFetchApi } from "@/lib/utils/useFetchApi";

const HomeComponents = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["videos", selectedCategory],
    queryFn: () => useFetchApi(`search?part=snippet&q=${selectedCategory}`),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <div className="grid lg:grid-cols-5 gap-1 bg-transparent h-full overflow-hidden mt-12 pt-2">
      <div className="hidden lg:block col-span-1 bg-primary h-full overflow-auto">
        <Sidebar />
      </div>

      <div className="col-span-5 lg:col-span-4 bg-secondary h-screen lg:h-full overflow-auto  flex flex-col gap-5">
        <HomeNavScrollbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <h1 className="text-xl font-medium mt-16 pt-4 px-2">
          <span className="font-thin">Category</span>: {selectedCategory}.
        </h1>

        {isError ? (
          <div className="text-destructive flex items-center justify-center m-auto lg:text-4xl text-center px-5">
            Data Not Found
          </div>
        ) : isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i}>
                <SkeletonVideoCard />
              </div>
            ))}
            <div className="mb-5"></div>
          </div>
        ) : (
          <>
            {!data?.items ? (
              <div className="text-destructive flex items-center justify-center m-auto lg:text-4xl text-center px-5">
                Data Not Found
              </div>
            ) : (
              <div className="px-4 lg:px-2">
                <VideoSection videos={data?.items} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeComponents;
