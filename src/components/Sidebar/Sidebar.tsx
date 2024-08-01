import React from "react";

import { uniqueCategories } from "@/lib/utils/constants";
import { cn } from "@/lib/utils/tailwind-utils";
import { type ICategory } from "@/Types/TypesCategory";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}
export const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
}: SidebarProps) => {
  return (
    <div className="flex lg:flex-col gap-3 py-1 p-4">
      <h2 className="bg-secondary h-0.5 w-full my-2" />
      <h1 className="text-lg font-medium">Favourites</h1>
      {uniqueCategories?.slice(0, 5).map((item: ICategory, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategory(item?.name)}
          className={cn(
            "flex items-center gap-2 lg:gap-4 rounded-full lg:rounded-xl  px-5 py-1 lg:p-3 text-sm lg:text-xl opacity-95 ",
            selectedCategory === item?.name &&
              "bg-card opacity-100 text-destructive"
          )}
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item?.name}</h1>
        </button>
      ))}
      <h2 className="bg-secondary h-0.5 w-full my-2" />
      <h1 className="text-lg font-medium">Most Popular</h1>
      {uniqueCategories?.slice(5, 10).map((item: ICategory, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategory(item?.name)}
          className={cn(
            "flex items-center gap-2 lg:gap-4 rounded-full lg:rounded-xl  px-5 py-1 lg:p-3 text-sm lg:text-xl opacity-95 ",
            selectedCategory === item?.name &&
              "bg-card opacity-100 text-destructive"
          )}
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item?.name}</h1>
        </button>
      ))}
      <h2 className="bg-secondary h-0.5 w-full my-2" />
      <h1 className="text-lg font-medium">Explore</h1>
      {uniqueCategories?.slice(10,15).map((item: ICategory, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategory(item?.name)}
          className={cn(
            "flex items-center gap-2 lg:gap-4 rounded-full lg:rounded-xl  px-5 py-1 lg:p-3 text-sm lg:text-xl opacity-95 ",
            selectedCategory === item?.name &&
              "bg-card opacity-100 text-destructive"
          )}
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item?.name}</h1>
        </button>
      ))}
      <h2 className="bg-secondary h-0.5 w-full my-2" />
      <h1 className="text-lg font-medium">More From YouTube</h1>
      {uniqueCategories?.slice(15).map((item: ICategory, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategory(item?.name)}
          className={cn(
            "flex items-center gap-2 lg:gap-4 rounded-full lg:rounded-xl  px-5 py-1 lg:p-3 text-sm lg:text-xl opacity-95 ",
            selectedCategory === item?.name &&
              "bg-card opacity-100 text-destructive"
          )}
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item?.name}</h1>
        </button>
      ))}
      <span className="hidden lg:block text-xs opacity-50">
        @Copyright 2024 YouTube
      </span>
    </div>
  );
};
