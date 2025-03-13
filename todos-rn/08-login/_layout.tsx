import { ProfileContext } from "@/contexts/profile.context";
import { Profile } from "@/types/profile";
import { Href, Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [profile, setProfile] = useState<Profile>();
  const [href, setHref] = useState<Href>("/");

  return (
    <ProfileContext.Provider value={{ profile, setProfile, href, setHref }}>
      <Stack />
    </ProfileContext.Provider>
  );
}
