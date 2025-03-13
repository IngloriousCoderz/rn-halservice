import { Profile } from "@/types/profile";
import { ProfileState } from "@/types/profile.state";
import { Href } from "expo-router";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useProfileStore = create<ProfileState>()(
  devtools(
    immer((set) => ({
      profile: undefined,
      setProfile: (profile: Profile) =>
        set((state) => {
          state.profile = profile;
        }),

      href: "/",
      setHref: (href: Href) =>
        set((state) => {
          state.href = href;
        }),
    })),
    { name: "Profile" }
  )
);
