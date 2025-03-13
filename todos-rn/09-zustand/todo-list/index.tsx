import { useEffect } from "react";

import App from "./app-container";

import { Redirect } from "expo-router";
import { useProfileStore } from "@/stores/profile.store";

export default function Index({ name = "User" }) {
  const profile = useProfileStore((state) => state.profile);
  const setHref = useProfileStore((state) => state.setHref);

  useEffect(() => {
    if (!profile) {
      setHref("/todo-list");
    }
  }, [profile]);

  if (!profile) {
    return <Redirect href="/login" />;
  }

  return <App name={name} />;
}
