import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { uniqueCategories } from "@/lib/utils/constants";
import { useCategory } from "@/lib/slices/useCategory";
import { cn } from "@/lib/utils/tailwind-utils";
import { ICategory } from "@/Types/TypesCategory";
import Image from "next/image";
export default function NavSidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu className="h-10 w-10 p-2  " />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-card !text-white !h-full">
        <div className="flex items-center gap-1 pb-2">
          <Image alt="icons" src={"/ytb.png"} width={30} height={30} />
          <h1 className="text-xl font-normal">YouTube</h1>
        </div>
        <SheetHeader className="text-start text-white !h-full !overflow-auto">
          <SheetDescription>
            <SheetCategories />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function SheetCategories() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="flex flex-col gap-2 py-1  mt-10 text-white">
      <section className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Favourites</h1>{" "}
        <h1 className="!h-[0.1px] mt-2 w-full bg-white/55" />
        <section className="flex flex-col gap-2">
          {uniqueCategories?.slice(0, 5).map((item: ICategory, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(item?.name)}
              className={cn(
                "flex items-center gap-4  rounded-full  py-1 text-xl opacity-95 ",
                selectedCategory === item?.name &&
                  "bg-card opacity-100 text-destructive"
              )}
            >
              {item.icons}
              <h1 className="text-lg font-normal">{item?.name}</h1>
            </button>
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="!h-[0.1px] mt-2 w-full bg-white/55" />
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <section className="flex flex-col gap-2">
          {uniqueCategories?.slice(5, 10).map((item: ICategory, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(item?.name)}
              className={cn(
                "flex items-center  gap-4 rounded-full py-1 text-xl opacity-95 ",
                selectedCategory === item?.name &&
                  "bg-card opacity-100 text-destructive"
              )}
            >
              {item.icons}
              <h1 className="text-lg font-normal">{item?.name}</h1>
            </button>
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="!h-[0.1px] mt-2 w-full bg-white/55" />
        <h1 className="text-2xl font-bold">Explore</h1>
        <section className="flex flex-col gap-2">
          {uniqueCategories?.slice(10, 15).map((item: ICategory, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(item?.name)}
              className={cn(
                "flex items-center  gap-4 rounded-full py-1 text-xl opacity-95 ",
                selectedCategory === item?.name &&
                  "bg-card opacity-100 text-destructive"
              )}
            >
              {item.icons}
              <h1 className="text-lg font-normal">{item?.name}</h1>
            </button>
          ))}
        </section>
      </section>

      <section className="flex flex-col gap-5">
        <h1 className="!h-[0.1px] mt-2 w-full bg-white/55" />
        <h1 className="text-2xl font-bold"> Trending</h1>
        <section className="flex flex-col gap-2">
          {uniqueCategories?.slice(15, 20).map((item: ICategory, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(item?.name)}
              className={cn(
                "flex items-center  gap-4 rounded-full py-1 text-xl opacity-95 ",
                selectedCategory === item?.name &&
                  "bg-card opacity-100 text-destructive"
              )}
            >
              {item.icons}
              <h1 className="text-lg font-normal">{item?.name}</h1>
            </button>
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="!h-[0.1px] mt-2 w-full bg-white/55" />
        <h1 className="text-2xl font-bold">More From YouTube</h1>
        <section className="flex flex-col gap-2">
          {uniqueCategories?.slice(15).map((item: ICategory, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(item?.name)}
              className={cn(
                "flex items-center  gap-4 rounded-full py-1 text-xl opacity-95 ",
                selectedCategory === item?.name &&
                  "bg-card opacity-100 text-destructive"
              )}
            >
              {item.icons}
              <h1 className="text-lg font-normal">{item?.name}</h1>
            </button>
          ))}
        </section>
      </section>
      <span className="hidden lg:block text-xs opacity-50">
        @Copyright 2024 YouTube
      </span>
    </div>
  );
}
