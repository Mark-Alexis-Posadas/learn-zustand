// state.js
import { create } from "zustand";

const useAccordionStore = create((set) => ({
  activeAccordionId: null,
  setActiveAccordionId: (id) => set({ activeAccordionId: id }),
}));

export default useAccordionStore;
