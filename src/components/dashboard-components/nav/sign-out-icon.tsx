"use client";

import { JSX } from "react";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./index.module.css";

export function SignOutIcon(): JSX.Element {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/sign-out", { method: "DELETE" });
    router.push("/sign-in");
  };

  return <LogoutIcon className={styles.sign_out} onClick={handleSignOut} />;
}
