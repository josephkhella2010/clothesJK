import { ImgsArr } from "../../../helps/ImgsArr";
import styles from "../ContactUs.module.css";
export default function ContactUsFirstSection() {
  return (
    <div className={styles.ContactUsFirstSectionMainContainer}>
      <div className={styles.ContactUsFirstSectionContainer}>
        <div className={styles.ContactUsFirstSectionTextSection}>
          <h3>Get in touch</h3>
          <p>
            Want to get in touch? we'd love to hear from you.Here's how you can
            reach us
          </p>
        </div>
        <div className={styles.ContactUsFirstSectionImgSection}>
          <img src={ImgsArr["ContactUsPageUpperSection"]} alt="not found" />
        </div>
      </div>
    </div>
  );
}
