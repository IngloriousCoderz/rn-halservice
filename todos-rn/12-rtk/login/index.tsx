import { useState } from "react";
import { router } from "expo-router";

import LoginComponent from "./login";
import * as api from "@/services/api";
import { useProfileStore } from "@/stores/profile.store";

export default function Login() {
  const href = useProfileStore((state) => state.href);
  const setProfile = useProfileStore((state) => state.setProfile);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const profile = await api.login(username, password);
    setProfile(profile);
    router.replace(href);
  };

  return (
    <LoginComponent
      username={username}
      password={password}
      onUsernameChange={setUsername}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
}
