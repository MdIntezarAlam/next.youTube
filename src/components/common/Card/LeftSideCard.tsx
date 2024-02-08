"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardItem {
  id: number;
  icons: JSX.Element | string;
  title: string;
  path?: string;
}
interface ICard {
  Title: string;
  data: CardItem[];
}
export function LeftSideCard({ Title, data }: ICard) {
  return (
    <>
      <h1 className="text-base text-primary-foreground">{Title}</h1>
      {data.map((item) => (
        <Link
          passHref
          key={item.id}
          href={item.path ?? ""}
          className="flex items-center gap-x-5 py-1.5 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {typeof item.icons === "string" ? (
            <Image
              alt="user"
              width={30}
              height={30}
              src={item.icons}
              className="object-cover rounded-full w-7 h-7"
            />
          ) : (
            item.icons
          )}
          <h1 className="text-sm">{item.title}</h1>
        </Link>
      ))}
    </>
  );
}
