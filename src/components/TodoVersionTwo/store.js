import { create } from "zustand";

const useStore = create((set) => ({
  toggleAddTask: false,
  setToggleAddTask: () =>
    set((state) => ({ toggleAddTask: (state.toggleAddTask = true) })),
}));

export default useStore;
