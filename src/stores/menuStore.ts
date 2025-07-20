import { create } from "zustand";

type MenuStore = {
  isOpen: boolean;
  toggleMenu: () => void;
  setOpen: (value: boolean) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (value) => set({ isOpen: value }),
}));
