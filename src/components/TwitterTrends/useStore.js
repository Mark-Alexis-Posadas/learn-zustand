import { create } from "zustand";

const data = [
  {
    id: 1,
    category: "Trending in Philippines",
    title: "Israel Embassy",
  },
  {
    id: 2,
    category: "Trending in Philippines",
    title: "Israel Embassy",
  },
  {
    id: 3,
    category: "Trending in Philippines",
    title: "Israel Embassy",
  },
  {
    id: 4,
    category: "Trending in Philippines",
    title: "Israel Embassy",
  },
];
const useStore = create((state) => ({
  initialState: data,
}));

export default useStore;
