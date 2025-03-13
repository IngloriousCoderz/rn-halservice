import { Href } from "expo-router";
import { Profile } from "./profile";

export interface ProfileState {
  profile?: Profile;
  setProfile: (profile: Profile) => void;
  href: Href;
  setHref: (href: Href) => void;
}
