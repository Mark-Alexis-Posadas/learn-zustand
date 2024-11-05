import { create } from "zustand";
export const userUserProfile = create({
  userProfile: {
    firstName: "Mark Alexis",
    middleName: "Petrola",
    lastName: "Posadas",
    email: "markalexisposadas@gmail.com",
  },

  setUserProfile: (newProfile) =>
    set((state) => ({
      userProfile: { ...state.userProfile, ...newProfile },
    })),
});
