"use client";

import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import styles from "../nav.module.css";

export function SignOutIcon() {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/sign-out", { method: "DELETE" });
    router.push("/sign-in");
  };

  return <LogoutIcon className={styles.sign_out} onClick={handleSignOut} />;
}
