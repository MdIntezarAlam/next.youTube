export function useSearchHistory() {
  return {
    saveSearchTerm: (term: string) => {
      const searchTerms = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .find(([key]) => key.trim() === "search_term")?.[1];
      if (searchTerms) {
        document.cookie = `search_term=${searchTerms},${term}`;
      } else {
        document.cookie = `search_term=${term}`;
      }
    },
    getSearchTerms: () => {
      if (typeof window === "undefined") return;
      return document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .find(([key]) => key.trim() === "search_term")?.[1];
    },
  };
}
