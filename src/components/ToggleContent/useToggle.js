import { create } from "zustand";

const useToggle = create((set) => ({
  isToggle: false,
  isToggleText: "Show",
  setIsToggle: () =>
    set((state) => ({
      isToggle: !state.isToggle,
      isToggleText: state.isToggle ? "Show" : "Hide",
    })),
}));

export default useToggle;
