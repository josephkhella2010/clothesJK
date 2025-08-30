import styles from "../navigation.module.css";
import { ImgsArr } from "../../../helps/ImgsArr";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../Store/store";
import {
  setLang,
  type SupportedLanguages,
} from "../../../reducerSlices/LangSlice";

interface PropsType {
  showMenu?: boolean; // ✅ optional
  setShowMenu: (showMenu: boolean) => void; // ✅ optional
}
export default function FlagSection({
  showMenu: _showMenu,
  setShowMenu,
}: PropsType) {
  const flagsMenu: { url: string; language: SupportedLanguages }[] = [
    { url: ImgsArr["svFlag"], language: "SV" },
    { url: ImgsArr["engFlag"], language: "ENG" },
  ];
  const lang = useSelector(
    (state: RootState) => state.LangData.lang
  ) as SupportedLanguages;
  const findFlag = flagsMenu.find((item) => item.language === lang);
  const dispatch = useDispatch();
  const [ShowSubMenu, setShowSubMenu] = useState<boolean>(false);
  /*  */
  const [isMobileWidth, setIsMobileWidth] = useState<boolean>(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setIsMobileWidth(true);
      } else {
        setIsMobileWidth(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileWidth]);
  /*  */
  return (
    <div
      className={styles.flagsContainer}
      onClick={(e) => {
        e.stopPropagation(); // ✅ stop bubbling to MobileMenuSection
        setShowSubMenu(!ShowSubMenu);
      }}
    >
      <img src={findFlag?.url} alt="not found" className={styles.flagMainImg} />
      {ShowSubMenu && (
        <div
          className={`${styles.flagsSubMenu}
         ${
           isMobileWidth
             ? styles.flagsSubMenuforMobileMain
             : styles.flagsSubMenuItem
         }`}
        >
          {flagsMenu &&
            flagsMenu.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className={`${
                    isMobileWidth
                      ? styles.flagsSubMenuforMobile
                      : styles.flagsSubMenuItem
                  }`}
                  onClick={() => {
                    dispatch(setLang(item.language));
                    setShowMenu(false);
                  }}
                >
                  <img src={item.url} alt="not found" />
                  <p>{item.language}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
