import { useNavigate } from "react-router-dom";
import styles from "../navigation.module.css";
import { useDispatch } from "react-redux";
import { setLogOUt } from "../../../reducerSlices/LoginUserSlice";

export default function DesktopNav() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.desktopSection}>
        <img src="/logo.svg" alt="not found" />
        <ul className={styles.desktopMenuContent}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/aboutUs")}>AboutUs</li>
          <li onClick={() => navigate("/products")}>Product</li>
          <li onClick={() => navigate("/contactUs")}>ContactUs</li>
          <div className={styles.desktopmenuBtn}>
            <button onClick={() => navigate("/register")}>Register</button>
            {token ? (
              <button onClick={() => dispatch(setLogOUt())}>logOut</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}
