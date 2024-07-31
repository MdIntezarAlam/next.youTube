import React from "react";
import SearchResult from "./_components/SearchResult";

interface Props {
  params: {
    searchTerm: string;
  };
}
export default function Search({ params }: Props) {
  return <SearchResult searchTerm={params?.searchTerm} />;
}
