import { ImgsArr } from "../../../helps/ImgsArr";
import styles from "../ContactUs.module.css";
export default function ContactUsBottomSection() {
  return (
    <div className={styles.ContactUsBottomSectionMainContainer}>
      <div className={styles.ContactUsBottomSectionContainer}>
        <img src={ImgsArr["ContactUsPageMapSection"]} alt="not found" />
        <div className={styles.ContactUsBottomSectionText}>
          <a href="" target="_blank">
            10095 ,Hickman ct unit 1, Iowa ,Clive,50325 United States
          </a>
          <a href="tel:+15156812487">+15156812487</a>
          <a href="mailto:GMcomputerllc@yahoo.com">GMcomputerllc@yahoo.com</a>
        </div>
      </div>
    </div>
  );
}
