"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { uniqueCategories } from "@/lib/utils/constants";
import { useCategory } from "@/lib/slices/useCategory";
import { cn } from "@/lib/utils/tailwind-utils";
import { ICategory } from "@/Types/TypesCategory";
import Image from "next/image";
import { useState } from "react";

export default function NavSidebarSheet() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <GiHamburgerMenu className="h-10 w-10 p-2" />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-card !text-white !h-full">
        <div className="flex items-center gap-1 pb-2 -mt-3">
          <Image alt="icons" src={"/ytb.png"} width={40} height={40} />
          <h1 className="text-2xl font-normal">YouTube</h1>
        </div>
        <SheetHeader className="text-start text-white !h-full !overflow-auto">
          <SheetDescription>
            <SheetCategories open={open} setOpen={setOpen} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function SheetCategories({ open, setOpen }: { open: boolean; setOpen: any }) {
  const { selectedCategory, setSelectedCategory } = useCategory();

  const categoriesSections = [
    { title: "Favourites", start: 0, end: 5 },
    { title: "Most Popular", start: 5, end: 10 },
    { title: "Explore", start: 10, end: 15 },
    { title: "Trending", start: 15, end: 20 },
    { title: "Most Watched", start: 20, end: 25 },
    { title: "World Wide", start: 25, end: 30 },
    { title: "More", start: 30, end: 35 },
  ];

  return (
    <div className="flex flex-col gap-2  mb-10  text-white px-2">
      {categoriesSections.map(({ title, start, end }) => (
        <CategorySection
          key={title}
          title={title}
          categories={uniqueCategories.slice(start, end)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          open={open}
          setOpen={setOpen}
        />
      ))}
      <span className="text-xs  text-white border-t pt-4 mt-4 border-white ">
        @Copyright 2024 YouTube
      </span>
    </div>
  );
}

function CategorySection({
  title,
  categories,
  selectedCategory,
  setSelectedCategory,
  open,
  setOpen,
}: {
  title: string;
  categories: ICategory[];
  selectedCategory: string;
  setSelectedCategory: (name: string) => void;
  open: boolean;
  setOpen: any;
}) {
  return (
    <section className="flex flex-col ">
      <h1 className="text-xl font-semibold border-b pb-2 border-white/50 my-4">
        {title}
      </h1>
      <section className="flex flex-col gap-2">
        {categories.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedCategory(item.name);
              setOpen(!open);
            }}
            className={cn(
              "flex items-center gap-4 rounded-full text-xl opacity-95",
              selectedCategory === item.name &&
                "bg-card opacity-100 text-destructive"
            )}
          >
            {item.icons}
            <h1 className="text-lg font-normal">{item.name}</h1>
          </button>
        ))}
      </section>
    </section>
  );
}
