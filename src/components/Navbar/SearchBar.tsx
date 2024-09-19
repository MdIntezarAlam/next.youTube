"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSearchHistory } from "@/lib/slices/useSearchHistory";

export function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const { saveSearchTerm } = useSearchHistory();
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const terms = document.cookie
      .split("; ")
      .find((row) => row.startsWith("search_term="))
      ?.split("=")[1];
    if (terms) {
      setSearchHistory(terms.split(","));
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!searchTerm) return;
    saveSearchTerm(searchTerm);
    setSearchHistory((prevHistory) => [searchTerm, ...prevHistory]);
    const url = new URLSearchParams();
    url.append("search", searchTerm);
    router.push(`/search/${url.toString()}`);
    setSearchTerm("");
    setShow(false);
  }

  return (
    <>
      <Sheet open={show} onOpenChange={setShow}>
        <SheetTrigger asChild>
          <IoSearchOutline className="font-normal text-4xl text-gray-200" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="w-full bg-secondary  h-full pt-8 lg:px-0"
        >
          <div className=" mx-auto  p-5 h-full">
            <form
              onSubmit={handleSubmit}
              className="relative h-10 flex items-center gap-x-2 w-full text-ellipsis"
            >
              <FaArrowLeft
                className="cursor-pointer text-primary-foreground"
                onClick={() => setShow(false)}
              />
              <Input
                placeholder="Search Anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-full rounded-full w-full outline-none text-base pr-8 text-primary-foreground placeholder:text-ellipsis"
              />
              <button
                type="submit"
                className="absolute end-3 top-1/2 -translate-y-1/2 text-primary-pftext-primary-foreground"
              >
                <FaSearch className="text-primary-foreground" />
              </button>
            </form>
            <div className="mt-5">
              {searchHistory.length > 0 && (
                <div className="flex flex-col gap-2 text-primary-foreground">
                  <h2 className="text-lg">Search History</h2>
                  {searchHistory.map((term, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:underline"
                      onClick={() => {
                        setSearchTerm(term);
                        setShow(false);
                        router.push(
                          `/search?search=${term}&limit=40&page=1&category=ALL`
                        );
                      }}
                    >
                      {term}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
