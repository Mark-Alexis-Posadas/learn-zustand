import { create } from "zustand";

const useFilterName = create((set) => ({
  names: [
    "Jake",
    "James",
    "Juan",
    "Alexis",
    "Alex",
    "Aries",
    "Aldrin",
    "George",
    "Gerry",
  ],
  filterName: "",
  setFilterName: (value) => set({ filterName: value }),
  filteredNames: [],
  filterNames: () =>
    set((state) => ({
      filteredNames: state.names.filter((name) =>
        name.toLowerCase().startsWith(state.filterName.toLowerCase())
      ),
    })),
}));

export default useFilterName;
