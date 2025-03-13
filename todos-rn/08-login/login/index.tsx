import { useContext, useState } from "react";
import { router } from "expo-router";

import LoginComponent from "./login";
import { ProfileContext } from "@/contexts/profile.context";
import * as api from "@/services/api";

export default function Login() {
  const { setProfile, href } = useContext(ProfileContext);

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
