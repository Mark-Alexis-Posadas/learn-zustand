import { create } from "zustand";

const useStore = create((set) => ({
  initialState: [
    { id: 1, name: "Banana", amount: 5 },
    { id: 2, name: "Apple", amount: 6 },
  ],

  removeElement: () =>
    set((state) => ({
      initialState: state.initialState.filter((data) => data.id !== 2),
    })),
}));

export default useStore;
