import React from "react";

import { appScroll } from "@/lib/utils/constants";
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
    <div className="w-full flex gap-x-3 overflow-auto">
      {appScroll.map((items: INavScrollbar, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategory(items?.name)}
          className={cn(
            "px-4 py-2 text-xs font-semibold bg-secondary border border-border rounded-md text-primary-foreground hover:bg-border cursor-pointer",
            {
              "bg-border text-primary-foreground":
                selectedCategory === items?.name,
            }
          )}
        >
          {items.name}
        </button>
      ))}
    </div>
  );
}
