import { DASHBOARD_PAGES } from "@/constants/shared-constants";
import { NavItem, SignOutIcon } from "./components";
import styles from "./nav.module.css";

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
