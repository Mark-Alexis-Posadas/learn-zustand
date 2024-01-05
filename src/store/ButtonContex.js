import { create } from "zustand";

const useButtonStore = create((set) => ({
  buttonColor: "red",
  changeButtonColor: (color) => set({ buttonColor: color }),
}));

export default useButtonStore;
