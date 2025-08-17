import { useEffect, useState } from "react";
import DesktopNav from "./childComponent/DesktopNav";
import MobileNav from "./childComponent/MobileNav";
import styles from "./navigation.module.css";
export default function NavigationContainer() {
  const MobileWidth = 650;
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useEffect(() => {
    const resizeFunction = () => {
      if (innerWidth < MobileWidth) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    resizeFunction();
    window.addEventListener("resize", resizeFunction);
  });
  return (
    <div className={styles.navigationWrapper}>
      {isMobile ? (
        <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : (
        <DesktopNav />
      )}
    </div>
  );
}
