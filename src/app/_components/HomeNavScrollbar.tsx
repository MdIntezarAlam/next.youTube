import React from "react";

import { uniqueCategories } from "@/lib/utils/constants";
import { cn } from "@/lib/utils/tailwind-utils";
import { type INavScrollbar } from "@/Types/TypesCategory";
interface IProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function HomeNavScrollbar({
  selectedCategory,
  setSelectedCategory,
}: IProps) {
  return (
    <nav className="lg:col-span-4 w-full lg:w-[80%] fixed top-12 py-4 bg-primary pl-4 lg:pl-0 pr-4">
      <div className="w-full flex gap-x-3 overflow-auto">
        {uniqueCategories.map((items: INavScrollbar, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(items?.name)}
            className={cn(
              "px-4 py-2 text-xs font-semibold bg-secondary border border-border rounded-md text-primary-foreground hover:bg-border cursor-pointer",
              {
                "bg-destructive text-primary-foreground":
                  selectedCategory === items?.name,
              }
            )}
          >
            {items.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
