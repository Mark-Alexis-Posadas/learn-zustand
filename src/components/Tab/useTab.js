import { create } from "zustand";
const tabData = [
  { title: "Tab 1", content: "Content for Tab 1" },
  { title: "Tab 2", content: "Content for Tab 2" },
  { title: "Tab 3", content: "Content for Tab 3" },
];
const useTab = create((set) => ({
  tabs: tabData,
  activeTab: 0,
  setActiveTab: (idx) => set({ activeTab: idx }),
}));

export default useTab;
