import { create } from "zustand";

const useCounter = create((set) => ({
  buttonText: ["increment", "decrement", "reset"],
  count: 0,

  handleClick: (index) => {
    set((state) => {
      if (index === 0 && state.count < 10) {
        // Check if count is less than 10
        return { count: state.count + 1 };
      } else if (index === 1) {
        return { count: state.count - 1 };
      } else {
        return { count: 0 };
      }
    });
  },
}));

export default useCounter;
