import { create } from "zustand";

const useRatings = create((set) => ({
  rating: 0,
  hover: 0,
  setRatings: (index) => set({ rating: index }),
  setHover: (index) => set({ hover: index }),
}));

export default useRatings;
