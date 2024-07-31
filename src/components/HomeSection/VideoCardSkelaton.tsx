import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonVideoCard = () => {
  return (
    <Skeleton className="w-full h-[295px] flex flex-col gap-4 pb-2 rounded-md bg-card text-primary-foreground cursor-pointer animate-pulse">
      <Skeleton className="h-[180px] w-full bg-gray-300 rounded-t-md"></Skeleton>
      <Skeleton className="py-2 w-full flex gap-2 px-2">
        <Skeleton className="w-10 h-10 bg-gray-300 rounded-full"></Skeleton>
        <Skeleton className="flex flex-col gap-1 w-[80%]">
          <Skeleton className="h-4 bg-gray-300 rounded"></Skeleton>
          <Skeleton className="h-3 bg-gray-300 rounded mt-1"></Skeleton>
        </Skeleton>
      </Skeleton>
    </Skeleton>
  );
};

export default SkeletonVideoCard;
