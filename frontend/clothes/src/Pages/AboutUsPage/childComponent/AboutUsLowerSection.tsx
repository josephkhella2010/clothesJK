import { useNavigate } from "react-router-dom";
import { ImgsArr } from "../../../helps/ImgsArr";
import styles from "../aboutUs.module.css";
export default function AboutUsLowerSection() {
  const navigate = useNavigate();
  return (
    <div className={styles.AboutUsLowerSectionContainer}>
      <img src={ImgsArr["AboutUsPageLowerSection"]} alt="not Found" />
      <p>Interested in our formula? Feel free to contact us!</p>
      <button
        onClick={() => {
          navigate("/contactUs");
        }}
      >
        Contact Us
      </button>
    </div>
  );
}
