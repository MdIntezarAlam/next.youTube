"use client";
import { Button } from "@/components/ui/button";
import { TpyeButtons } from "@/lib/@Types/TypeButtons";
import { btnArr } from "@/lib/store_data/data";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState<string | number>(0);

  const clickedBtn = (id: number | string) => setSelectedButton(id);

  return (
    <div className="w-full flex gap-x-3 overflow-auto">
      {btnArr.map((items: TpyeButtons) => (
        <Button
          key={items.id}
          className={cn(
            "bg-secondary border rounded-xl  cursor-pointer",
            selectedButton === items.id
              ? "bg-background text-foreground"
              : "bg-secondary"
          )}
          onClick={() => clickedBtn(items.id)}
        >
          {items.title}
        </Button>
      ))}
    </div>
  );
}
