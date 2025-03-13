import { Profile } from "@/types/profile";
import { Href } from "expo-router";
import { createContext } from "react";

interface ProfileContext {
  profile?: Profile;
  setProfile: (profile: Profile) => void;
  href: Href;
  setHref: (href: Href) => void;
}

export const ProfileContext = createContext<ProfileContext>({
  profile: undefined,
  setProfile: () => {},
  href: "/",
  setHref: () => {},
});
