import React from "react";

interface ITextProps {
  Text1: string;
  Text2: string;
  lIcon: React.ReactNode;
  RIcon: React.ReactNode;
}

export default function CustomText({ RIcon, Text1, Text2, lIcon }: ITextProps) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <span> {lIcon}</span>
        <div className="flex flex-col">
          <h1 className="text-xl">{Text1}</h1>
          <p className="text-secondary-foreground text-xs">{Text2}</p>
        </div>
      </div>
      <span> {RIcon}</span>
    </div>
  );
}
