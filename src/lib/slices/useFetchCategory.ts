import { create } from "zustand";
interface IcategoryStote {
  category: string;
  setCategory: (category: string) => void;
}

const useCategory = create<IcategoryStote>((set) => ({
  category: "all",
  setCategory: (category) => set({ category }),
}));
export default useCategory;
