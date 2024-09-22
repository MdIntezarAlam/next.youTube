import { create } from "zustand";
interface ICategory {
  selectedCategory: any;
  setSelectedCategory: (selectedCategory: any) => void;
}

export const useCategory = create<ICategory>((set) => ({
  selectedCategory: "Music",
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
}));
