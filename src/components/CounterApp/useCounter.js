import { create } from "zustand";

const useCounter = create((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set((state) => ({ count: (state.count = 0) })),
}));

export default useCounter;
