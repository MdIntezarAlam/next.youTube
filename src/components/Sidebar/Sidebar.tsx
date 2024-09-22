import React from "react";
import { uniqueCategories } from "@/lib/utils/constants";
import { cn } from "@/lib/utils/tailwind-utils";
import { type ICategory } from "@/Types/TypesCategory";
import { useCategory } from "@/lib/slices/useCategory";

export const Sidebar = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  const categoriesSections = [
    { title: "Favourites", start: 0, end: 5 },
    { title: "Most Popular", start: 5, end: 10 },
    { title: "Explore", start: 10, end: 15 },
    { title: "More From YouTube", start: 15, end: uniqueCategories.length },
  ];

  return (
    <div className="flex lg:flex-col gap-3 py-1 p-4">
      {categoriesSections.map(({ title, start, end }) => (
        <CategorySection
          key={title}
          title={title}
          categories={uniqueCategories.slice(start, end)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
      <span className="hidden lg:block text-xs opacity-50">
        @Copyright 2024 YouTube
      </span>
    </div>
  );
};

const CategorySection = ({
  title,
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  title: string;
  categories: ICategory[];
  selectedCategory: string;
  setSelectedCategory: (name: string) => void;
}) => {
  return (
    <div className="flex lg:flex-col gap-3 py-1">
      <h2 className="bg-secondary h-0.5 w-full my-2" />
      <h1 className="text-lg font-medium">{title}</h1>
      {categories.map((item, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategory(item.name)}
          className={cn(
            "flex items-center gap-2 lg:gap-4 rounded-full lg:rounded-xl px-5 py-1 lg:p-3 text-sm lg:text-xl opacity-95",
            selectedCategory === item.name &&
              "bg-card opacity-100 text-destructive"
          )}
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.name}</h1>
        </button>
      ))}
    </div>
  );
};
