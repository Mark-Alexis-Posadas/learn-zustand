import { create } from "zustand";

const useButtonStore = create((set) => ({
  buttonColor: "",
  changeButtonColor: (color) => set({ buttonColor: color }),
}));

export default useButtonStore;
