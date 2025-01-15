import { create } from "zustand";

export const useImageStore = create((set) => ({
  image: null,
  setImage: (image: string) => set({ image }),
}));
