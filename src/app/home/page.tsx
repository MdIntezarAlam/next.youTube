import React from "react";
import LeftSideDash from "./_component/LeftSideDash";
import RightSideDash from "./_component/RightSideDash";

export default function HomePage() {
  return (
    <div className="h-screen flex">
      <main className="w-full bg-primary flex overflow-hidden">
        <LeftSideDash />
        <RightSideDash />
      </main>
    </div>
  );
}
