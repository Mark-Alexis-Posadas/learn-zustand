import { create } from "zustand";

const useToggle = create((set) => ({
  isToggle: false,
  setIsToggle: () => set((state) => ({ isToggle: !state.isToggle })),
}));

export default useToggle;
