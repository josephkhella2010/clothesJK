import { useNavigate } from "react-router-dom";
import styles from "../navigation.module.css";
import { BiArrowBack } from "react-icons/bi";
import { setLogOUt } from "../../../reducerSlices/LoginUserSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import FlagSection from "./FlagSection";
interface PropsType {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}
export default function MobileNav({ showMenu, setShowMenu }: PropsType) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);
  return (
    <div className={styles.MobileContainer}>
      <div className={styles.MobileSection}>
        <img src="/logo.svg" alt="not found" />
        <div
          className={styles.hamSection}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <div
          className={`${styles.MobileMenuSection} ${
            showMenu ? styles.ShowMenu : styles.hideMenu
          }`}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <div
            className={styles.backDiv}
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <BiArrowBack className={styles.backIcon} />
            <p>Back</p>
          </div>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/aboutUs")}>AboutUs</li>
          <li onClick={() => navigate("/products")}>Product</li>
          <li onClick={() => navigate("/contactUs")}>ContactUs</li>
          <div className={styles.mobileMenuBtn}>
            <button onClick={() => navigate("/register")}>Register</button>
            {token ? (
              <button
                onClick={() => {
                  dispatch(setLogOUt());
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                logOut
              </button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
          <FlagSection showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </div>
    </div>
  );
}
