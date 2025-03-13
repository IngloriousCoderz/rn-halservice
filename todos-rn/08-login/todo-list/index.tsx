import { useContext, useEffect } from "react";

import App from "./app-container";

import { ProfileContext } from "@/contexts/profile.context";
import { Redirect } from "expo-router";

export default function Index({ name = "User" }) {
  const { profile, setHref } = useContext(ProfileContext);

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
