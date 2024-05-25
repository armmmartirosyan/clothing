import { DASHBOARD_PAGES } from "@/constants/shared-constants";
import { SignOutIcon } from "./sign-out-icon";
import { NavItem } from "./nav-item";
import styles from "./index.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      {DASHBOARD_PAGES.map((navItem) => (
        <NavItem navItem={navItem} key={navItem.path} />
      ))}

      <SignOutIcon />
    </nav>
  );
}
