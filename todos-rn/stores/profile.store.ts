import { Profile } from "@/types/profile";
import { ProfileState } from "@/types/profile.state";
import { Href } from "expo-router";
import { create } from "zustand";

export const useProfileStore = create<ProfileState>()((set) => ({
  profile: undefined,
  setProfile: (profile: Profile) => set((state) => ({ ...state, profile })),
  href: "/",
  setHref: (href: Href) => set((state) => ({ ...state, href })),
}));
