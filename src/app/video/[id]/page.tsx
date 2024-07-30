import React from "react";
import VideoContainer from "./_components/VideoContainer";

interface PageProps {
  params: {
    id: string;
  };
}

export default function page({ params }: PageProps) {
  return <VideoContainer id={params.id} />;
}
